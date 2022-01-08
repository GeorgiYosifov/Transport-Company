FROM node:16.13-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

ENV NODE_ENV development

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
