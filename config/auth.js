// Require the needed npm packages
const passport = require('passport') //authentication middleware
const bcrypt = require('bcrypt') //password hasing function 
const jwt = require('jsonwebtoken') // creates token with an option signature and or optional encryption that holds jSON


const secret = process.env.JWT_SECRET || 'enderBender' //token being storaged in  a vairble for later use //porcess is made with node. //process is undefined +> looking at or value 

const { Strategy, ExtractJwt } = require('passport-jwt') //classes that are built into 


const opts = { //defining a options objects for the passport strategy.

	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

	secretOrKey: secret,
}

// Require the user model
const User = require('../models/user')

const strategy = new Strategy(opts, function (jwt_payload, done) {

	User.findById(jwt_payload.id)

		.then((user) => done(null, user))
	
		.catch((err) => done(err))
})


passport.use(strategy)


passport.initialize()


const requireToken = passport.authenticate('jwt', { session: false })


const createUserToken = (req, user) => {
	if (
		!user ||
		!req.body.credentials.password ||
		!bcrypt.compareSync(req.body.credentials.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect')
		err.statusCode = 422 //unprocesable entity
		throw err
	}
	return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 }) 
}

module.exports = {
	requireToken,
	createUserToken,
}
