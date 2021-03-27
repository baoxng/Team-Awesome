const router = require('express').Router();
const loginRoutes = require('./loginRoutes');


router.use('/', loginRoutes);

module.exports = router;
