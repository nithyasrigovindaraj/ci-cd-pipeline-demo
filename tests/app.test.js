const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  it('should return greeting message on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello from the CI/CD Pipeline Demo!');
  });

  it('should return status UP on GET /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
  });
});
