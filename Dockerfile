FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i -g @angular/cli

COPY . .

RUN npm install

EXPOSE 4200

CMD [ "ng", "serve", "--open", "--host", "0.0.0.0" ]