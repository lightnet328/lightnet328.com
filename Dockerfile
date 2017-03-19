FROM nginx:latest
MAINTAINER lightnet328<lightnet328@gmail.com>

COPY nginx/default.conf /etc/nginx/conf.d/
COPY index.html /var/www/
COPY package.json /var/www/
COPY gulpfile.js /var/www/
COPY images /var/www/images/
COPY src /var/www/src/

WORKDIR /var/www

RUN apt-get update && apt-get install -y nodejs npm wget
RUN npm cache clean && npm install n -g
RUN n stable && ln -sf /usr/local/bin/node /usr/bin/node
RUN apt-get purge -y nodejs npm
RUN npm install && npm run build

CMD ["nginx", "-g", "daemon off;"]
