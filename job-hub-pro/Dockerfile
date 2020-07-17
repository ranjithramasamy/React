# Build a Docker image that uses nginx to serve the front-end content.
FROM node:latest AS builder

WORKDIR /usr/src/

RUN rm -rf build || true

COPY package.json package-lock.json ./
RUN npm install -g --silent

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM nginx:latest

COPY --from=builder /usr/src/build /usr/share/nginx/html

COPY --from=builder /usr/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]