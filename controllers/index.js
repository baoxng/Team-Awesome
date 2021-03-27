const router = require('express').Router();

const urlRoutes = require('./urlRoutes');
const apiRoutes = require('./api');

router.use('/', urlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
