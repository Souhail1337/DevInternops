FROM node:14 
WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .
EXPOSE 4000
# RUN rm -rf /app/node_modules


CMD ["npm","start"]
