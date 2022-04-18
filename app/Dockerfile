FROM electronuserland/builder:wine

COPY .npmrc ./

COPY package.json ./

RUN yarn

COPY src-electron/ ./src-electron/

RUN yarn electron:build

COPY src tsconfig.json .

RUN yarn react:build

COPY . .

CMD ["yarn", "build:win"]
