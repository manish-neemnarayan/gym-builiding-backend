import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: String,
  description: String,
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
  },
  url: String, //url of the image
});

export default mongoose.model("Image", imageSchema);
