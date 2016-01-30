var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userModel = new Schema({
	email: {type: String},
	forename: {type: String},
	surname: {type: String},
	createAt: {type: Date, default:Date.now}
});

module.exports = mongoose.model('User', userModel);