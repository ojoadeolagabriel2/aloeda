FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install && npm install serve
COPY . .

RUN npm run build
CMD ["npm", "start"]
