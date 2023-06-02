FROM node:14 as builder 
WORKDIR /app

COPY package*.json ./

RUN npm install 
COPY . .
RUN npm run build 



FROM node:14 
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/nodes

ENTRYPOINT [ "/bin/sh", "/app/start.sh" ]
