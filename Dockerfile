FROM node:16.17.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

USER node

CMD [ "node", "app.js" ]