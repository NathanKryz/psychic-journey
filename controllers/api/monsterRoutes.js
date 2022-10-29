const router = require('express').Router();
// const { response } = require('express');
const { Monster } = require('../../models');

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

module.exports = router;