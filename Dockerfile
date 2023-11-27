FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install express

COPY app.js .

COPY ./dist/ ./dist/

EXPOSE 4200

CMD ["node", "app.js"]
