var router = require('express').Router();
var controller = require('./noteController');
var auth = require('../../auth/auth');
var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);
router.param('slug', controller.slug);
router.param('term', controller.search);

router.route('/')
	.get(controller.get)
	.post(checkUser, controller.post);

router.route('/:id')
	.get(controller.getOne)
	.put(checkUser, controller.put)
	.delete(checkUser, controller.delete);

router.route('/slug/:slug')
	.get(controller.getOne);

router.route('/search/:term')
	.get(controller.search);

module.exports = router;
