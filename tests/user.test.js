const request = require('supertest');
const app = require('../app'); // Adjust the path to your app

describe('User Endpoints', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                name: 'John Doe',
                email: 'john@example.com'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    });

    it('should get all users', async () => {
        const res = await request(app)
            .get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
    });
});
