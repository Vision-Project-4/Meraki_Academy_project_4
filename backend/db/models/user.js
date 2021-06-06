
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
  nationality: { type: String },
  id_number: { type: Number},
  name: { type: String},
  age: { type: Number},
  email: { type: String, unique: true },
  password: { type: String},
});

// users.pre("save", async function () {
//   this.email = this.email.toLowerCase();
//   this.password = await bcrypt.hash(this.password, 10);
// });



// users.statics.authenticateBasic = async function (email, password) {
//   try {
//     const user = await this.findOne({ email });
//     if (!user) return ["The email doesn't exist", 404];

//     const valid = await bcrypt.compare(password, user.password);
//     if (valid) {
//       const payload = {
//         userId: user._id,
//         country: user.country,
//         role: user.role,
//       };

//       const options = {
//         expiresIn: "60m",
//       };

//       return [jwt.sign(payload, process.env.SECRET, options), 200];
//     }
//     return ["The password you’ve entered is incorrect", 403];
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

module.exports = mongoose.model("User", userSchema);
