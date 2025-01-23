FROM node:21.4.0

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

CMD npm run preview -- --host=0.0.0.0 --port=80

