FROM node:alpine

EXPOSE 8081

WORKDIR /comments

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
