FROM node:14-alpine
WORKDIR /app

COPY . .
COPY package*.json tsconfig.json ./

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]
