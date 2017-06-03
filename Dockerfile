FROM node:6.10.3

RUN npm install gulp-cli -g

RUN mkdir -p /src
WORKDIR /src

CMD npm install && gulp
