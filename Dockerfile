FROM node:20 AS builder

WORKDIR /app

COPY package*.json tsconfig.json ./
COPY src/ ./src/
COPY features/ ./features/
COPY test/ ./test/

RUN npm install
RUN npm run build

FROM node:20

WORKDIR /app

COPY --from=builder /app .

CMD ["sh", "-c", "npm run test:mocha && npm run test:cucumber"]