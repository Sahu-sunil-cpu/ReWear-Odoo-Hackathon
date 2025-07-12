import mongoose from "mongoose";

const adminLogSchema = new mongoose.Schema(
  {
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    actionType: String, // e.g., ban_user, approve_listing
    targetUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    targetListingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    reason: String,
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminLogSchema);
