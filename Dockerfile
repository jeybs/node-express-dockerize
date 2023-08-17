FROM node:lts

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]