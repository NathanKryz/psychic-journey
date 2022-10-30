const router = require('express').Router();
const {User, Character} = require('../models');

router.get('/', async (req, res) => {
    console.log("Rendering homepage");
    req.session.current_page = true;

    res.render('homepage', {
        logged_in: req.session.logged_in,
        home_page: req.session.current_page, 
    });
});



router.get('/characters', async (req, res) => {
    try {
    console.log("Rendering character page");
    const charData = await Character.findAll();
    const characters = charData.map((character) => character.get({plain: true}));
    req.session.current_page = true;
    res.render('characterselect', {
        characters,
        logged_in: req.session.logged_in,
        char_page: req.session.current_page, 
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/game', async (req, res) => {
    try {
        console.log("Rendering gameplay page #1");
        req.session.current_page = true;
        res.render('game', {
            logged_in: req.session.logged_in,
            game_page: req.session.current_page,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;