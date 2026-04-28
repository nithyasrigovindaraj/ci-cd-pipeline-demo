# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY src/ ./src/

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]
