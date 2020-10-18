const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all users
router.get('/', async (req,res) => {
    try{
        const user = await User.find();
        res.json(user);
    } catch(err)
    {
        res.json({message:err});
    }
});

//post new user
router.post('/', async (req,res) => {
    const user = new User({
        user_pid : req.body.user_pid,
        picture: req.body.picture,
        games: req.body.games,
        bio: req.body.bio,
        friends: req.body.friends,
        gamelinks: req.body.gamelinks,
        parties: req.body.parties
    });

    try
    {
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (err) {
        res.json({message:err});
    }
})

//get a specific user
router.get('/:id', async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(err)
    {
        res.json({message:err});
    }
});

//update a user
router.patch('/:id', async (req,res) => {
    try{
        const updateUser = await User.updateOne(
            {_id: req.params.id},
            {$set: {
                user_pid : req.body.user_pid,
                picture: req.body.picture,
                games: req.body.games,
                bio: req.body.bio,
                friends: req.body.friends,
                gamelinks: req.body.gamelinks,
                parties: req.body.parties
                }
            });
        res.json(updateUser);
    } catch(err)
    {
        res.json({message:err});
    }
});

//delete a user
router.delete('/:id', async (req,res) => {
    try{
        const removeUser = await User.remove({_id: req.params.id});
        res.json(removeUser);
    }
    catch (err) {
        res.json({message:err});
    }
});

module.exports = router;