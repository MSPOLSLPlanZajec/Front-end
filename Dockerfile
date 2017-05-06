FROM node:7-onbuild

CMD ["bower", "install"]
CMD ["npm", "run", "start-dist"]

EXPOSE 8080