const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const {Schema} = mongoose;

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: true, required: true },
	password: { type: String, unique: false, required: true }

})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	setPassword: function(password) {
		this.password = bcrypt.hashSync(password, 10);
	},
}

// Define hooks for pre-saving
userSchema.post('save', function (doc, next) {
	const {password} = doc;

	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')

		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.setPassword(password);
		
		next()
	}
})

mongoose.model('User', userSchema)