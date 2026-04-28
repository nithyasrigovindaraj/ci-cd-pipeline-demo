# End-to-End CI/CD Pipeline Demo

This project demonstrates a complete End-to-End CI/CD Pipeline using Node.js, Express, Jest, Docker, and GitHub Actions.

## Features
- **Application**: A simple Node.js Express API.
- **Testing**: Automated unit tests using Jest and Supertest.
- **Containerization**: Dockerfile for creating a production-ready image.
- **CI/CD**: GitHub Actions workflow that automatically:
  - Installs dependencies
  - Runs tests
  - Builds the Docker image
  - Simulates a deployment process

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Start server:
   ```bash
   npm start
   ```

## Docker

Build and run the Docker image locally:
```bash
docker build -t ci-cd-demo .
docker run -p 3000:3000 ci-cd-demo
```
