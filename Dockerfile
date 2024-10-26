FROM node

WORKDIR /developer/nodejs/container

COPY . .

RUN npm ci
ENV PORT 3000

CMD ["npm","run","dev"]