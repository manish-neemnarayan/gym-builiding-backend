import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Membership", membershipSchema);
