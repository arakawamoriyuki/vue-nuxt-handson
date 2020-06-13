FROM node:14.3.0

ENV TZ Asia/Tokyo
ENV APP_ROOT /usr/src/app

WORKDIR $APP_ROOT

RUN npm install --force -g yarn@1.22.4

COPY package.json $APP_ROOT/package.json
COPY yarn.lock $APP_ROOT/yarn.lock

RUN yarn

COPY . $APP_ROOT

# 環境用意できない人への為の開発環境です
# 本番はbuildしてnginxなりなんなりで配信しましょう
EXPOSE 8080
CMD ["yarn", "serve"]
