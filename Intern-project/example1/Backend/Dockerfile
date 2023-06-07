FROM node:14 as builder 
WORKDIR /app

COPY package*.json .

RUN npm install
# npm ci = continuis integration

COPY . .
# RUN rm -rf /app/node_modules
CMD ["npm","start"]
