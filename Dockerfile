FROM node:latest

ADD app.js /app.js

ADD package.json /package.json

RUN npm i

ENTRYPOINT [ "node", "app.js"]