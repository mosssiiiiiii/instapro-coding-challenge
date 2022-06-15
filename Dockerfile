FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn" ,"start" ]