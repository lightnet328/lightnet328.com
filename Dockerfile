FROM node:9.11.1

ADD index.html package.json gulpfile.js src /var/www/

WORKDIR /var/www

RUN yarn install

CMD yarn run build && yarn run watch
