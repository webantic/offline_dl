FROM node:8-alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node . ./

RUN npm i

ENV PORT=3100
ENV HOST=http://0.0.0.0
ENV BOT_URL=

CMD ["node", "index.js"]
