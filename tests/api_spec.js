var app = require('../server');
var request = require('supertest');
var expect = require('chai').expect;
var subjects = require('../server/api/subject/subjectModel');
var notes = require('../server/api/note/noteModel');

require('colors');

describe('[NOTES]', function(){

  notes.collection.drop();
  subjects.collection.drop();

  var subject_id, note_id, note

  it('should create a subject', function(done) {
    request(app)
      .post('/api/subjects')
      .send({
        name: "linguistics"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        subject_id = resp.body._id
        done();
      })
  });

  it('should create a note', function(done) {
    request(app)
      .post('/api/notes')
      .send({
        name: "2 Name of 1st Test Note",
        body: "body of first test note here",
        slug: "1st-test-note",
        subjects: subject_id
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        note_id = resp.body._id;
        done();
      })
  });

  it('should get all notes', function(done) {
    request(app)
      .get('/api/notes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  it('should update a note', function(done) {
    request(app)
      .put(`/api/notes/${note_id}`)
      .send({
        name: 'foo updated name'
      })
      .end(function(err, resp) {
        expect(resp.body.name).to.equal('foo updated name');
        done();
      });
  });

  it('should delete a note', function(done) {
    request(app)
      .delete(`/api/notes/${note_id}`)
      .end(function(err, resp) {
        console.log(`---- deleted note: ${resp.body.name} ----`.magenta);
        expect(resp.body._id).to.have.a("string");
        done();
      });
  });

  it('should delete a subject', function(done) {
    request(app)
      .delete(`/api/subjects/${subject_id}`)
      .end(function(err, resp) {
        console.log(`---- deleted subject: ${resp.body.name} ----`.magenta);
        expect(resp.body._id).to.have.a("string");
        done();
      });
  });
});
