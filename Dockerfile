FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY dist/ ./dist/

COPY app.js ./

EXPOSE 6001
