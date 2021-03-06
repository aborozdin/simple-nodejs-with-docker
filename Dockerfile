FROM node:14-alpine

WORKDIR /node-app

COPY package.json .
RUN npm install
RUN mv /node-app/node_modules /node_modules

COPY . .

CMD [ "node", "app.js" ]

EXPOSE 8080