FROM node:14 as builder 
WORKDIR /app

COPY package*.json ./

RUN npm install 
RUN npm install -g @nestjs/cli
COPY . .
RUN rm -rf /app/node_modules
RUN npm run build 



FROM node:14 
WORKDIR /app
ADD ./script.sh /app/start.sh
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

ENTRYPOINT [ "/bin/sh", "/app/start.sh" ]
