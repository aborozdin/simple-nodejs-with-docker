FROM node:14-alpine

WORKDIR /node-app

COPY package.json .
RUN npm install

COPY . .

CMD [ "node", "app.js" ]

EXPOSE 8080