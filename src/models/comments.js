import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    comment: {
      type: String,
    },

    isReplied: {
      type: Boolean,
    },

    reply: {
      type: String,
    },

    replyTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
