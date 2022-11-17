# specifing the node base image with desired version  of node
FROM node:16

#create a directory to hold the application code inside the image, this will be the working directory for your application
WORKDIR /usr/src/app

# COPY <src> <dest> : here 'src' is all package.json and package-lock.json and 'dest' is 'app' folder inside the image
COPY package*.json ./

# As we are building our code for production ,npm ci bypasses a package’s package.json to install modules from a package’s lockfile. This ensures reproducible builds—we are getting exactly what we expect on every install.
RUN npm ci --only=production

#copy everything from 'app' folder inside the DOcker image. Other term for it is bundling the app
COPY . .


USER node

#run the application 
CMD [ "node", "app.js" ]