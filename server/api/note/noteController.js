var Note = require('./noteModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
  Note.findById(id)
    .populate('subjects')
    .exec()
    .then(function(note) {
      if (!note) {
        next(new Error('No note with that id'));
      } else {
        req.note = note;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.slug = function(req, res, next, slug) {
  Note.findOne({ slug: slug})
    .populate('subjects')
    .exec()
    .then(function(note) {
      if (!note) {
        next(new Error('No note with that id'));
      } else {
        req.note = note;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.search = function(req, res, next, term) {
  Note.find({$text: { $search: term }})
    .populate('subjects')
    .exec()
    .then(function(notes){
      res.json(notes);
    }, function(err){
      next(err);
    });
};

exports.get = function(req, res, next) {
  Note.find({})
    .populate('subjects')
    .exec()
    .then(function(notes){
      res.json(notes);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var note = req.note;
  res.json(note);
};

exports.put = function(req, res, next) {
  var note = req.note;
  var update = req.body;

  note.subjects = update.subjects;
  
  _.merge(note, update);

  note.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newnote = req.body;

  Note.create(newnote)
    .then(function(note) {
      res.json(note);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.note.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
