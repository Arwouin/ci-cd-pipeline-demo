FROM mcr.microsoft.com/playwright:v1.37.0-focal
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "playwright", "test"]

