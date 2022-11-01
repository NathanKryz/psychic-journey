const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const monsterRoutes = require('./monsterRoutes');
const wordRoutes = require('./wordRoutes');

// setting up path url for seperate routers
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/monsters', monsterRoutes);
router.use('/words', wordRoutes);



module.exports = router;
