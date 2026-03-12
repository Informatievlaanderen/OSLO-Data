FROM node:22-alpine

EXPOSE 8080

ADD . /app
WORKDIR /app
RUN npm i
CMD ["npm", "run", "start"]
