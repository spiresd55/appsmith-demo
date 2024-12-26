FROM node:20
WORKDIR /app
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD cd /app/packages/appsmith-api && npm run start:dev
