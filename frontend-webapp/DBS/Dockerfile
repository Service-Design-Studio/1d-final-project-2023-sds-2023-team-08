# Use an official Node.js runtime as the base image
FROM node:18.16.0-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the desired port (if applicable)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]