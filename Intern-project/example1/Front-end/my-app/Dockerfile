FROM node:14 as builder 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14
WORKDIR /app
RUN npm install -g serve

EXPOSE 3000
COPY --from=builder /app/build .

CMD ["serve", "-s", "."]
