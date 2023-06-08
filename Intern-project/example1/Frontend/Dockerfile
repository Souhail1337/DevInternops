FROM node:14 as builder 

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]