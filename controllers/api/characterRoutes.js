const router = require('express').Router();
// const { response } = require('express');
const { Character } = require('../../models');

// get function for specific character using the id
router.get('/:id', async (req, res) => {
    try {
        const chosenCharacter = await Character.findByPk(req.params.id);
        req.session.currentChar = req.params.id;
        if (!chosenCharacter) {
          res.status(404).json({ message: 'This character does not exist' });
        //   response.render('homepage');
        }
        res.status(200).json(chosenCharacter);
      } catch (err) {
        res.status(500).json(err);
      }
});

// get function for all characters
router.get('/', async (req, res) => {
  try {
      const chosenCharacter = await Character.findAll();
      if (!chosenCharacter) {
        res.status(404).json({ message: 'This character does not exist' });
      //   response.render('homepage');
      }
      res.status(200).json(chosenCharacter);
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports = router;