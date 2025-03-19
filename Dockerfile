# Step 1: Use an official Node.js runtime as the base image
FROM node:18 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the Next.js application for production
RUN npm run build

# Step 7: Expose the port the app will run on
EXPOSE 3000

# Step 8: Define the command to run the app in production mode
CMD ["npm", "start"]
