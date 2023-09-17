import mongoose from "mongoose";

const registerToGymSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  membership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membership",
  },
  paymentDueDate: {
    type: Date,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  paymentId: String,
});

export default mongoose.model("RegisterToGym", registerToGymSchema);
