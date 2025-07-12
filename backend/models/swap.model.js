import mongoose from "mongoose";

const swapRequestSchema = new mongoose.Schema(
  {
    fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    toUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    offerListingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" }, // optional
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed", "cancelled"],
      default: "pending",
    },
    type: { type: String, enum: ["points", "swap"], required: true },
    message: String,
  },
  { timestamps: true }
);

export const SwapModel = mongoose.model("SwapItem", swapRequestSchema);
