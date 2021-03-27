const router = require('express').Router();
const userRoutes = require('./userRoutes');
const diaryRoutes = require('./diaryRoutes')

router.use('/users', userRoutes);
router.use('/diary', diaryRoutes);

module.exports = router;
