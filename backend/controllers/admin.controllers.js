import User from "../models/user.models.js";

// GET /api/admin/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-passwordHash");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/admin/users/:id/ban
export const toggleUserBan = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.status = user.status === "banned" ? "active" : "banned";
    await user.save();

    res.json({ message: `User ${user.status === "banned" ? "banned" : "unbanned"} successfully.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/admin/logs
export const getPlatformLogs = async (req, res) => {
  // Dummy implementation – integrate with Winston/Morgan or DB in real app
  res.json({
    logs: [
      "User X registered",
      "User Y posted a listing",
      "Admin banned user Z",
    ],
    count: 3,
  });
};
