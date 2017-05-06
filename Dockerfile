FROM node:7-onbuild

CMD ["npm", "install", "-g", "bower"]
CMD ["bower", "install"]
CMD ["npm", "run", "start-dist"]

EXPOSE 8080