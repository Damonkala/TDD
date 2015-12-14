'use strict';

var chai = require('chai');
var expect = chai.expect
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = require('../../app');
var Book = require('../../models/book');

var clearDb = function(done){
	Book.remove({}, function(err) {
		done();
	});
}
describe('/book', function() {
	describe('GET /', function() {
			it('should return books.', function(done){
				chai.request(app)
				.get('/books/')
				.end(function(err, res){
					expect(res).to.have.status(200)
					expect(res).to.have.headers;
					// expect(res.body[0]._id).to.equal('566f1db0821e3d6bce927e54')
					done();
			})
		})
	})
	describe('POST /', function() {
		beforeEach(clearDb);
		afterEach(clearDb);
			it('should add a new book.', function(done){
				chai.request(app)
				.post('/books')
				.send({title: 'Magic 4: Revengence', author: 'Gandalf the red'})
				.end(function(err, res){
					expect(res.body._id).to.be.ok;
					expect(err).to.be.null;
					expect(res).to.have.status(200)
					done();
			})
		})
	})
})
