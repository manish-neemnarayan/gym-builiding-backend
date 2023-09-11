import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: Number,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

export default mongoose.model("Exercise", exerciseSchema);
