# Build Stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build --verbose
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY robots.txt /usr/share/nginx/html/robots.txt
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
