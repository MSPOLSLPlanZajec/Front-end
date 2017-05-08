FROM node:7-onbuild

COPY . /usr/src/app

RUN npm install -g bower
RUN bower install --allow-root

CMD ["npm", "run", "start-dist"]

EXPOSE 8080