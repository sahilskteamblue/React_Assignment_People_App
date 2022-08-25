FROM node:14.17.3-buster

WORKDIR /webapp

COPY package.json /webapp/package.json
COPY package-lock.json /webapp/package-lock.json

RUN npm install

COPY . /webapp/

CMD ["npm", "run","start"]