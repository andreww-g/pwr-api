FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
LABEL authors="andrii"

CMD ["yarn", "start:dev"]