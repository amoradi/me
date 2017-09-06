var router = require('express').Router();

router.use('/users', require('./user/routes'));
router.use('/subjects', require('./subject/subjectRoutes'));
router.use('/notes', require('./note/noteRoutes'));

module.exports = router;
