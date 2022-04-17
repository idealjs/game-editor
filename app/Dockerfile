FROM electronuserland/builder:wine

COPY .npmrc /

COPY package.json /

RUN yarn

COPY . .

RUN yarn electron:build

RUN yarn react:build

CMD ["yarn", "build:win"]
