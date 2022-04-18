FROM electronuserland/builder:wine

COPY .npmrc ./

COPY package.json ./

RUN yarn

COPY src-electron/ ./src-electron/

RUN yarn electron:build

COPY . .

RUN yarn react:build

CMD ["yarn", "build:win"]
