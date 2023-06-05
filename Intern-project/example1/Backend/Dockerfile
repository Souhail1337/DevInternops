FROM node:14 as builder 
WORKDIR /app

COPY package*.json ./

RUN npm install h
COPY . .
RUN npm run build 



FROM node:14 
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

ENTRYPOINT [ "/bin/sh", "/app/start.sh" ]
