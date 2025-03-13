const request = require('supertest');
const { app, server } = require('./index'); 

describe('GET /', () => {
    it('should return "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
        expect(response.statusCode).toBe(200);
    });
});


afterAll((done) => {
    server.close(done);
});
