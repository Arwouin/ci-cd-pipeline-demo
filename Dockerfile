FROM node:20

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npx playwright install --with-deps

RUN ls -R

CMD ["npx", "playwright", "test"]



