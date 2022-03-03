FROM node:16

WORKDIR /app

ADD ./package*.json ./

RUN npm ci

ADD ./*.js ./
