const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8000');

//Test All
describe('GET /shop/items', () => {
	it('should return and array', (done) => {
		api
			.get('/shop/items')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});
});

// Test by ID
describe('GET /shop/items/:id', () => {
	let itemId;
	before((done) => {
		api
			.get('/shop/items')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const items = response.body;
				itemId = items[items.length - 1]._id;
				done();
			});
	});

	it('should check that the :id equals last id', (done) => {
		api
			.get(`/shop/items/${itemId}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body._id).to.equal(itemId);
				done();
			});
	});
});

// Test Post New
describe('POST /shop/items', () => {
	const newItem = {
		name: 'test',
		description: 'test',
		value: '1',
		weight: '1',
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunitation',
		categoryThree: 'Bullet',
		source: 'test',
	};
	before((done) => {
		api
			.post('/shop/items/new')
			.set('Accept', 'application/json')
			.send(newItem)
			.end(() => {
				done();
			});
	});
	let itemId;
	before((done) => {
		api
			.get('/shop/items/')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const items = response.body;
				itemId = items[items.length - 1]._id;
				done();
			});
	});
	it('should check that the :id name equals test', (done) => {
		api
			.get(`/shop/items/${itemId}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body.name).to.equal('test');
				done();
			});
	});
});

//Test Update by id
describe('PUT /shop/items/:id', () => {
	let itemToUpdate;
	before((done) => {
		api
			.get('/shop/items/')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const items = response.body;
				itemToUpdate = items[items.length - 1];
				itemToUpdate.name = 'updated';
				done();
			});
	});
	before((done) => {
		api
			.put(`/shop/items/${itemToUpdate._id}`)
			.set('Accept', 'application/json')
			.send(itemToUpdate)
			.end(done);
	});
	it('should update item', (done) => {
		api
			.get(`/shop/items/${itemToUpdate._id}`)
			.set('Accept', 'application/json')
			.end((error, response) => {
				// assert that name has been updated
				expect(response.body.name).to.equal('updated');
				done();
			});
	});
});

//Test Delete by ID
describe('/shop/items/:id', () => {
	let itemToDeleteId;
	before((done) => {
		api
			.get('/shop/items/')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const items = response.body;
				itemToDeleteId = items[items.length - 1]._id;
				done();
			});
	});
	before((done) => {
		api.delete(`/shop/items/${itemToDeleteId}`).end(done);
	});
	it('should check ID deleted', (done) => {
		api
			.get('/shop/items/')
			.set('Accept', 'application/json')
			.end((error, response) => {
				const itemToFind = response.body.find(
					(item) => item.id === itemToDeleteId
				);
				expect(itemToFind).to.equal(undefined);
				done();
			});
	});
});
