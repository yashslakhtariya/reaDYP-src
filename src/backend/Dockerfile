FROM node:latest

WORKDIR /app

COPY server.js /app/

RUN npm install express body-parser cors mongoose

CMD ["node", "server.js"]

EXPOSE 3000