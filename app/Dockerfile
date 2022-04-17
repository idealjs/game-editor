FROM electronuserland/builder:wine

COPY .npmrc /

COPY package.json yarn.lock /

RUN yarn

COPY . .

RUN yarn electron:build

RUN yarn build

CMD ["yarn", "build:win"]
