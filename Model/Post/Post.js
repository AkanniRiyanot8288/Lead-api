const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
   title:{
      type: String,
      required: [true, "post title is required"],
      trim: true,
   },
   description:{
      type: String,
      required: [true, "post description is required"],

   },
   category:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: [true, "post category is required"],

   }, 
   numViews:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",

 }, 
 likes:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",

}, 
dislikes:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",

}, 
user:{
  type: String,
}, 
},
{
  timestamps: true,
},
);
const Post = mongoose.model("Post",postSchema);

module.exports = Post;