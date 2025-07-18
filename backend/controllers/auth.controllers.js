import validator from "validator";
import jwt from "jsonwebtoken";
import { redis } from "../util/redis.js";
import  User  from "../models/user.models.js";
import { userValidationSchema } from "../validation-schema/userschema.js";
import bcrypt from 'bcryptjs'


function generateToken(userID) {
  let accessToken = jwt.sign({ userID }, process.env.ACCESS_TOKEN, {
    expiresIn: "7d",
  });
  let refreshToken = jwt.sign({ userID }, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  // console.log("token generated 3",accessToken,refreshToken);

  return { accessToken, refreshToken };
}

function setCookies(res, accessToken, refreshToken) {
  res.cookie("accessToken", accessToken, {
    // maxAge: 15 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  });
  res.cookie("refreshToken", refreshToken, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  });
}
async function setRefreshTokenOnRedis(userID, refreshToken) {
  await redis.set(
    `refreshToken:${userID}`,
    refreshToken,
    "EX",
    7 * 24 * 60 * 60
  );
}

export const signup = async (req, res) => {
  try {
    console.log(req.body);

    const { error, value } = userValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        message: error.details.map((detail) => detail.message),
      });
    }

    const { username, password, email } = req.body;

    const user = await User.findOne({ email });

    console.log("User in signup controller :", user);

    if (user) {
      return res.status(400).json({ error: "This email already exist" });
    }
    console.log(" user :: new user :: ",);
    // hash the passowrd
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    const { accessToken, refreshToken } = generateToken(newUser._id);

    console.log("newUser :", newUser);
    setCookies(res, accessToken, refreshToken);

    setRefreshTokenOnRedis(newUser._id, refreshToken);

    return res.status(200).json({
      data: {

        username: newUser.username,
        email: newUser.email,
        userId: newUser._id
      }
    });
  } catch (error) {
    console.log("Error in signup controllers :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Something missing" });

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found :", user);

    const isCorrect = await user.comparePassword(password);

    if (!isCorrect) {
      return res.status(400).json({ error: "Password is not correct" });
    }

    const { accessToken, refreshToken } = generateToken(user._id);

    setCookies(res, accessToken, refreshToken);

    setRefreshTokenOnRedis(user._id, refreshToken);

    return res.status(200).json({
      data: {
        username: user.username,
        email: user.email,
        userId: user._id
      }
    });
  } catch (error) {
    console.log("Error in login controllers :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    console.log("refreshToken in logout :: ", refreshToken);

    if (refreshToken) {
      const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
      console.log("Logout decode:", decode);
      await redis.del(`refreshToken:${decode.userID}`);
    }

    res.cookie("accessToken", "", { maxAge: 0 });
    res.cookie("refreshToken", "", { maxAge: 0 });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controllers :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ error: "No refresh token provided" });
    }

    const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

    if ((await redis.get(`refreshToken:${decode.userID}`)) !== refreshToken) {
      return res.status(400).json({ error: "Refresh token not found" });
    }

    const token = jwt.sign(
      { userID: decode.userID },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "15m", // expiresIn should be inside the same object as the algorithm
      }
    );

    res.cookie("accessToken", token, {
      maxAge: 15 * 60 * 1000,
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({ message: "Token refreshed" });
  } catch (error) {
    console.log("Error in refreshToken controllers :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const profile = async (req, res) => {
  try {

    const userId = req.user._id;

    const userProfile = await User.findById(userId);
    if (!userProfile) {
      return res.status(404).json({ error: "User not found" })
    }

    return res.status(200).json({ username: userProfile.username, email: userProfile.email, userId: userId });

  } catch (error) {
    console.log("Error in refreshToken controllers :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
