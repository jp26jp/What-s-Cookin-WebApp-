const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
                                           age     : {type: String, required: true, trim: true},
                                           zip     : {type: String, required: true, trim: true},
                                       });

module.exports = mongoose.model("User", UserSchema);
