FROM node:23.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

FROM builder AS deploy

COPY . .

CMD ["npm", "run", "dev"]