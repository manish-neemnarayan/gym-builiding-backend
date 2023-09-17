import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resetToken: String,
  expireToken: Date,
  detail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Detail",
  },
  role: {
    type: String,
    enum: ["user", "admin", "super-admin"], // TODO: implement the guest role
    default: "user",
  },
  paymentDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaymentDetails",
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  registerTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RegisterToGym",
  },
  isGuest: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema);
