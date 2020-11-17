//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/myTrip' 
// REQUIRE ALL MODELS HERE
require('./models/user');
// mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true }).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');  
    },
    err => {
         /** handle initial connection error */ 
         console.error('error connecting to Mongo: ', err)
        }
  );
module.exports = mongoose.connection