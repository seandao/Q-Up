const express = require('express');
const router = express.Router();
const Party = require('../models/Party');

//post new party
router.post('/', async (req,res) => {
    const party = new Party({
        party_id: req.body.party_id,
        user_pid: req.body.user_pid,
        size: req.body.size,
        playerIDS: req.body.playerIDS,
        game_name: req.body.game_name,
        readyQueue: req.body.readyQueue,
        discord: req.body.discord
    });

    try
    {
        const savedParty = await party.save();
        res.json(savedParty);
    }
    catch (err) {
        res.json({message:err});
    }
})


//get all parties
router.get('/', async (req,res) => {
    try{
        const party = await Party.find();
        res.json(party);
    } catch(err)
    {
        res.json({message:err});
    }
});

//get a specific party
router.get('/:id', async (req,res) => {
    try{
        const party = await Party.findById(req.params.id);
        res.json(party);
    } catch(err)
    {
        res.json({message:err});
    }
});

//update a party
router.patch('/:id', async (req,res) => {
    try{
        const updateParty = await Party.updateOne(
            {_id: req.params.id},
            {$set: {
                party_id: req.body.party_id,
                user_pid: req.body.user_pid,
                size: req.body.size,
                playerIDS: req.body.playerIDS,
                game_name: req.body.game_name,
                readyQueue: req.body.readyQueue,
                discord: req.body.discord
                }
            });
        res.json(updateParty);
    } catch(err)
    {
        res.json({message:err});
    }
});

//delete a party
router.delete('/:id', async (req,res) => {
    try{
        const removeParty = await Party.remove({_id: req.params.id});
        res.json(removeParty);
    }
    catch (err) {
        res.json({message:err});
    }
});

module.exports = router;