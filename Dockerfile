FROM node:latest

ADD app.js /app.js

ADD package.json /package.json

RUN npm i

RUN touch /kubernetes_web_server.log

ENTRYPOINT [ "node", "app.js"]