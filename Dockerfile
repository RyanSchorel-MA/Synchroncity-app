# Use Node.js as the base image since we'll need npm for React
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build React app
RUN npm run build

# Expose port 3000 for React frontend
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
    