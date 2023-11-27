FROM node:14-alpine

WORKDIR /app

COPY server.js /app/

RUN npm install express body-parser cors mongoose

CMD ["node", "server.js"]

EXPOSE 3000