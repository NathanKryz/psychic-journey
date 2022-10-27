const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log("Rendering homepage");
    res.render('homepage');
});

module.exports = router;