FROM node:14

WORKDIR /app_backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","server.js"]