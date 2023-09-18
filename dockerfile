FROM node:20-alpine AS build-step


WORKDIR /app1
 
COPY package.json package-lock.json /app1

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm install

COPY . .
RUN npm run build --prod 
FROM nginx:1.17.1-alpine
COPY --from=build-step app1/dist/chat_app /usr/share/nginx/html

EXPOSE 4200:80