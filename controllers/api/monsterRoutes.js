const router = require('express').Router();
// const { response } = require('express');
const { Monster, Hangman } = require('../../models');

// get function for all monsters
router.get('/', async (req, res) => {
    try {
        const chosenMonster = await Monster.findAll();
        if (!chosenMonster) {
          res.status(404).json({ message: 'This monster does not exist' });
        //   response.render('homepage');
        }
        res.status(200).json(chosenMonster);
      } catch (err) {
        res.status(500).json(err);
      }
});

// get function for specific monster using the id
router.get('/:id', async (req, res) => {
  try {
      const chosenMonster = await Monster.findByPk(req.params.id, {
        include: [{ model: Hangman }]
      });
      if (!chosenMonster) {
        res.status(404).json({ message: 'This monster does not exist' });
      //   response.render('homepage');
      }
      res.status(200).json(chosenMonster);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;