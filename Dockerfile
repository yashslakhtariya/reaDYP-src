FROM node:14-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY dist/ /app/dist/

COPY app.js /app/

CMD [ "node", "app.js" ]

EXPOSE 6001
