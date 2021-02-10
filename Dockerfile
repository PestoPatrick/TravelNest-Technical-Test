FROM node:15.8
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

RUN ng build --prod

CMD ng serve --host 0.0.0.0

