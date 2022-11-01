const router = require('express').Router();

const homeRoutes = require('./homeroute')
const apiRoutes = require('./api');

// setting up api and homepage url for routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
