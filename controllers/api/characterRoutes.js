const router = require('express').Router();
// const { response } = require('express');
const { Character } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const chosenCharacter = await Character.findByPk(req.params.id);
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