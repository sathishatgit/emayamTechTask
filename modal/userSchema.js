import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
