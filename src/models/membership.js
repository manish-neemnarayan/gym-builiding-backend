import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    type: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Membership", membershipSchema);
