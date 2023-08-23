# Use the official Node.js image from Docker Hub
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variable for path
ENV PATH=$PATH:/app/node_modules/.bin

# Start the application
CMD ["node", "server.js"]
