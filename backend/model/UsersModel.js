const mongoose = require("mongoose");
const UserSchema = require("../schemas/UsersSchema");

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;   // ✅ direct model export
