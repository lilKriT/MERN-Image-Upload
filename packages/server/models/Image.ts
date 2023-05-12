import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const Image = mongoose.model("Image", ImageSchema);

export default Image;
