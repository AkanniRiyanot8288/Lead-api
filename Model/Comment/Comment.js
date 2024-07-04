const mongoose = required("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "post",
      required: [true, "post is required"],
    },
    user: {
          type: Object,
          required: [true, "comment description is required"]
    },
  },
  {
    timeStamps: true
  }
);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;