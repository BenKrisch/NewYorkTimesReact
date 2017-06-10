import mongoose from "mongoose";

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  text: String,
  saved: {
    type: Boolean,
    default: false
  }
});

var Quote = mongoose.model("Article", articleSchema);

module.exports = Article;