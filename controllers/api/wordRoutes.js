const router = require('express').Router();
// const { response } = require('express');
const { Hangman } = require('../../models');

// get function for recieving a specific word using id
router.get('/:id', async (req, res) => {
    try {
        const chosenWords = await Hangman.findByPk(req.params.id);
        if (!chosenWords) {
          res.status(404).json({ message: 'This word does not exist' });
        //   response.render('homepage');
        }
        res.status(200).json(chosenWords);
      } catch (err) {
        res.status(500).json(err);
      }
});

//get function for recieving all words
router.get('/', async (req, res) => {
    try {
        const chosenWords = await Hangman.findAll();
        if (!chosenWords) {
          res.status(404).json({ message: 'This word does not exist' });
        //   response.render('homepage');
        }
        res.status(200).json(chosenWords);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;