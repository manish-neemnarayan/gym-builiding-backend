import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
  },
});

export default mongoose.model("Video", videoSchema);
