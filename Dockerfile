FROM node:8.1
ADD ./project /project
WORKDIR /project
EXPOSE 3000
RUN npm install
CMD ["npm","start"]

