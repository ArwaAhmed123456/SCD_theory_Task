const request = require('supertest');
const { app, server } = require('./index');

describe('GET /', () => {
    it('should return "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
        expect(response.statusCode).toBe(200);
    });
});

// Ensure server closes properly
afterAll(async () => {
    await new Promise((resolve, reject) => {
        server.close((err) => {
            if (err) reject(err);
            else resolve();
        });
    });

    console.log("✅ Server closed successfully.");

    // 🛑 Exit Jest's event loop manually
    setTimeout(() => process.exit(0), 1000);
});
