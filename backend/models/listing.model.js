import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    category: String,
    condition: String,
    size: String,
    brand: String,
    images: [String],
    pointsValue: Number,
    status: {
      type: String,
      enum: ["available", "swapped", "removed"],
      default: "available",
    },
    visibility: { type: String, enum: ["public", "hidden"], default: "public" },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema)

export default Listing ;
