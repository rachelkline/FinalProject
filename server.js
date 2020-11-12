const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()
const PORT = 3001;
// Route requires



const dbConnection = require('./database') 
const user = require('./routes/user')
const routes = require('./routes')
const passport = require('./passport');



// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false, //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

// Routes
app.use('/user', user)
app.use(routes)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
