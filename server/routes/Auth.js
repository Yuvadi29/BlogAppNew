// This Route is used for authentication 

const router = require("express").Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt'); //Hashing library

//Register 
//For Creating something use post, updating exisiting model use put , delete ke liye delete, fetch ke liye get
router.post('/register', async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(12); //Kitne number tak
        const HashPassword = await bcrypt.hash(req.body.password, salt); //Hashing the password

        const newUser = new User({
            username: req.body.username,//Takes username from model
            email: req.body.email, //Takes Email from model
            password: HashPassword, //Takes password from model
            mobileNo: req.body.mobileNo, //Takes mobile number from model

        }); // using (req.body) we Take up everything from user model

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Login
router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        });
        !user && res.status(400).json("Invalid Credentials");

        const valid = await bcrypt.compare(req.body.password, user.password);
        !valid && res.status(400).json("Invalid Credentials");

        const{ password, ...other } = user._doc;

        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
