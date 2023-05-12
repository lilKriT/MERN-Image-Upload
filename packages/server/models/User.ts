import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  photo: {
    type: String,
  },

  birthdate: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
