const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

//get all users
router.get('/', async (req,res) => {
    try{
        const game = await Game.find();
        res.json(game);
    } catch(err)
    {
        res.json({message:err});
    }
});

//post new game
router.post('/', async (req,res) => {
    const game = new Game({
        game_id: req.body.game_id,
        name: req.body.name,
        category: req.body.category
    });

    try
    {
        const savedGame = await game.save();
        res.json(savedGame);
    }
    catch (err) {
        res.json({message:err});
    }
})

//get a specific game
router.get('/:id', async (req,res) => {
    try{
        const game = await Game.findById(req.params.id);
        res.json(game);
    } catch(err)
    {
        res.json({message:err});
    }
});

//update a game
router.patch('/:id', async (req,res) => {
    try{
        const updateGame = await Game.updateOne(
            {_id: req.params.id},
            {$set: {
                game_id: req.body.game_id,
                name: req.body.name,
                category: req.body.category
                }
            });
        res.json(updateGame);
    } catch(err)
    {
        res.json({message:err});
    }
});

//delete a game
router.delete('/:id', async (req,res) => {
    try{
        const removeGame = await Game.remove({_id: req.params.id});
        res.json(removeGame);
    }
    catch (err) {
        res.json({message:err});
    }
});

module.exports = router;