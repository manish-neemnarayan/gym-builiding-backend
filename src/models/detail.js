import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  gender: String,
  age: Number,
  weight: Number,
  height: Number,
  activity: String,
  goal: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  occupation: String,
  address: String,
  avatar: {
    // display picture
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Detail", detailSchema);
