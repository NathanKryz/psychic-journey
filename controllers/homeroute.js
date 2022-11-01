const router = require('express').Router();
const {User, Character} = require('../models');
const withAuth = require('../utils/auth');

// get function for rendering homepage to 'homepage' handlebars
router.get('/', async (req, res) => {
    console.log("Rendering homepage");
    req.session.current_page = true;

    res.render('homepage', {
        logged_in: req.session.logged_in,
        home_page: req.session.current_page, 
    });
});


// get function for rendering characters to the 'characterselect' handlebars with login authentication
router.get('/characters', withAuth, async (req, res) => {
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

// get function for rendering game to 'game' handlebars depending on which character chosen
router.get('/game', withAuth, async (req, res) => {
    try {
        console.log("Rendering gameplay page #1");
        var scripts = [{ script: `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js` }];
        req.session.current_page = true;
        req.session.activate_anims = true;
        if (req.session.currentChar == 1){
            console.log("Mage game");
            res.render('game', {
                logged_in: req.session.logged_in,
                game_page: req.session.current_page,
                mage_animation: req.session.activate_anims,
                scripts: scripts,
            });
        }
        else if (req.session.currentChar == 2){
            console.log("Warrior game");
            res.render('game', {
                logged_in: req.session.logged_in,
                game_page: req.session.current_page,
                warrior_animation: req.session.activate_anims,
                scripts: scripts,
            });
        }
        else if (req.session.currentChar == 3){
            console.log("rogue game");
            res.render('game', {
                logged_in: req.session.logged_in,
                game_page: req.session.current_page,
                rogue_animation: req.session.activate_anims,
                scripts: scripts,
            });
        }
        // res.render('game', {
        //     logged_in: req.session.logged_in,
        //     game_page: req.session.current_page,
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;