'use strict';

var chai = require('chai');
var expect = chai.expect
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = require('../../app');

describe('/math', function() {
	describe('/add', function() {
		describe('/anyX:/anyY:', function() {
			var anyX = Math.round(Math.random() * 100 - 50);
			var anyY = Math.round(Math.random() * 100 - 50);

			it('should add two numbers.', function(done){
				chai.request(app)
				.get(`/math/add/${anyX}/${anyY}`)
				.end(function(err, res){
					expect(res).to.have.status(200)
					expect(res.body.result).to.equal(anyX + anyY);
					done();
				})
			})
		})
	})
	describe('/multiply', function() {
		describe('/anyX:/anyY:', function() {
			var anyX = Math.round(Math.random() * 100 - 50);
			var anyY = Math.round(Math.random() * 100 - 50);
			it('should multiply two numbers.', function(done){
				chai.request(app)
				.get(`/math/multiply/${anyX}/${anyY}`)
				.end(function(err, res){
					expect(res).to.have.status(200)
					expect(res.body.result).to.equal(anyX * anyY);
					done();
				})
			})
		})
	})
})
