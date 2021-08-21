const mongoose = require('mongoose');

const roles = new mongoose.Schema({
	role: { type: String, required: true },
	permissions: { type: Array, required: true },
});

const role = mongoose.model('Roles', roles);
module.exports = role;