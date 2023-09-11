import mongoose from "mongoose";

const paymentDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  method: {
    type: String,
    enum: ["cash", "debit", "credit", "upi"],
  },
  cardNumber: Number,
  code: Number,
  expiryDate: String,
  vpa: String, // upi vpa
});

export default mongoose.model("PaymentDetails", paymentDetailsSchema);
