import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    method: { type: String, enum: ["points", "swap"] },
    swapWithListingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    pointsTransferred: Number,
    status: {
      type: String,
      enum: ["completed", "shipped", "cancelled"],
      default: "completed",
    },
    trackingInfo: {
      courier: String,
      trackingNumber: String,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
