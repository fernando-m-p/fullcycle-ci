FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

EXPOSE 3000