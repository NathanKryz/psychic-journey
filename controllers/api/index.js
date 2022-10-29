const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const monsterRoutes = require('./monsterRoutes');
const wordRoutes = require('./wordRoutes');


router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/monsters', monsterRoutes);
router.use('/words', wordRoutes);



module.exports = router;
