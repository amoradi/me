var Subject = require('./subjectModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
	Subject.findById(id)
		.then(function(subject) {
			if (!subject) {
				next(new Error('No subject with that id'));
			} else {
				req.subject = subject;
				next();
			}
		}, function(err) {
			next(err);
		});
};

exports.get = function(req, res, next) {
	Subject.find({})
		.then(function(subjects){
			res.json(subjects);
		}, function(err){
			next(err);
		});
};

exports.getOne = function(req, res, next) {
	var subject = req.subject;
	res.json(subject);
};

exports.put = function(req, res, next) {
	var subject = req.subject;
	var update = req.body;

	_.merge(subject, update);

	subject.save(function(err, saved) {
		if (err) {
			next(err);
		} else {
			res.json(saved);
		}
	});
};

exports.post = function(req, res, next) {
	var newsubject = req.body;

	Subject.create(newsubject)
		.then(function(subject) {
			res.json(subject);
		}, function(err) {
			logger.error(err);
			next(err);
		});
};

exports.delete = function(req, res, next) {
	req.subject.remove(function(err, removed) {
		if (err) {
			next(err);
		} else {
			res.json(removed);
		}
	});
};

