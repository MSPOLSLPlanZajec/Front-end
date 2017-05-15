FROM node:7-onbuild

COPY package.json /usr/src/app/

RUN npm install -g bower
RUN bower install --allow-root

COPY . /usr/src/app/

CMD ["npm", "run", "start-dist"]

EXPOSE 8080