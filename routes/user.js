const express = require('express')
const mongoose = require('mongoose');
const _ = require('lodash');
const router = express.Router()

const passport = require('../passport')

const User = mongoose.model('User');

router.post('/', 
    (req, res, next) => {
        console.log('user signup');

        const { username, password } = req.body    

        if (!username || !password) {
            return res.status(422).json({
                error: 'username and/or password is required',
            });
        }

        // ADD VALIDATION
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } 
            else if (user) {
                res.status(422).json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            } 
            else {
                const newUser = new User({username});

                newUser.setPassword(password);

                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }

            next();
        });
    },
)

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body);

        next();
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!====== blah')
    console.log(req.user)

    const user = req.user;

    if (user) {
        res.json({user: user.username});
    } else {
        res.status(422).json({ user: null });
    }
})

router.post('/logout', (req, res) => {
    console.log(req.user);

    if (req.user) {
        req.logout();
        res.redirect('/login');
    } else {
        res.status(400).send('no user to log out');
    }
})

module.exports = router