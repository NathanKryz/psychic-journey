const router = require('express').Router();
// const { response } = require('express');
const { Hangman } = require('../../models');

router.get('/:monster_id', async (req, res) => {
    try {
        const chosenWords = await Hangman.findByPk(req.params.monster_id);
        if (!chosenWords) {
          res.status(404).json({ message: 'This word does not exist' });
        //   response.render('homepage');
        }
        res.status(200).json(chosenWords);
      } catch (err) {
        res.status(500).json(err);
      }
});


router.get('/', async (req, res) => {
    try {
        const chosenWords = await Character.findAll();
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