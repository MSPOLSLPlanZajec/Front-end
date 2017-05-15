FROM node:7-onbuild

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm install -g bower
RUN bower install --allow-root

# Bundle app source
COPY . /usr/src/app

CMD ["npm", "run", "start-dist"]

EXPOSE 8080