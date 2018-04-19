FROM node:9.11.1

ADD index.html package.json gulpfile.js src /var/www/

WORKDIR /var/www

RUN npm install

CMD npm run build && npm run watch
