import mongoose from "mongoose";

import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.plugin(uniqueValidator);

export const UserModel = mongoose.model("User", userSchema);
