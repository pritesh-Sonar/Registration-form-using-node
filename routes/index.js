
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    
    newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));

});


router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

router.get('/users', (req, res) => {
    User.find({})
        .then(users => {
            res.render('users', { users });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});



module.exports = router;
