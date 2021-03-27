const router = require('express').Router();
const loginRoutes = require('./api/loginRoutes');
const userRoutes = require('./api/userRoutes');


router.use('/', loginRoutes);

module.exports = router;
