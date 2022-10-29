const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log("Rendering homepage");
    req.session.current_page = true;

    res.render('homepage', {
        logged_in: req.session.logged_in,
        home_page: req.session.current_page, 
    });
});



router.get('/characters', async (req, res) => {
    console.log("Rendering character page");
    req.session.current_page = true;
    res.render('characterselect', {
        logged_in: req.session.logged_in,
        char_page: req.session.current_page, 
    });
});

module.exports = router;