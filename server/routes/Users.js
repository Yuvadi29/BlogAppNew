// This Route is used for authentication 

const router = require("express").Router();
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const bcrypt = require('bcrypt');

//Update 
//For Creating something use post, updating exisiting model use put , delete ke liye delete, fetch ke liye get
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) { //Checking the id on the url with the one in database
        if (req.body.password) {
            const salt = await bcrypt.genSalt(12);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true }
            );
            res.status(200).json(updatedUser);

        }
        catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can only UPDATE your account");
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) { //Checking the id on the url with the one in database
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been Deleted");

            }
            catch (error) {
                res.status(500).json(error);
            }
        } catch (error) {
            res.status(404).json("No User Found");
        }
    } else {
        res.status(401).json("You can only DELETE your account");
    }
});

//Get User
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;
