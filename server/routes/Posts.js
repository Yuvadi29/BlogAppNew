// This Route is used for authentication 

const router = require("express").Router();
// const User = require('../models/User.js');
const Post = require('../models/Post');

//Create new post 
//For Creating something use post, updating exisiting model use put , delete ke liye delete, fetch ke liye get
router.post('/', async (req, res) => {
    const newPost = new Post(req.body); //Sab innput lega
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update Post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); //Find post
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            res.status(401).json("You can only UPDATE your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); //Find post
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been Deleted");
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else {
            res.status(401).json("You can only DELETE your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//Get Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get All Post
router.get('/', async (req, res) => {
    const username = req.query.user;
    const category = req.query.category;

    try {
        let posts;
        if (username) {
            posts = await Post.find({ username: username });
        } else if (category) {
            posts = await Post.find({
                categories: {
                    $in: [category]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;