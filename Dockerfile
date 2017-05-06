FROM node:7-onbuild

CMD ["npm", "run", "start-dist"]

EXPOSE 8080