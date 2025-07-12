import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    profileImage: String,
    points: { type: Number, default: 0 },
    bio: String,
    location: String,
    preferences: {
      size: String,
      gender: String,
      style: [String],
    },
    status: {
      type: String,
      enum: ["active", "banned", "deleted"],
      default: "active",
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
