# Development stage
FROM oven/bun:1.0 AS development

WORKDIR /usr/src/app

COPY package.json .
COPY bun.lockb .

RUN bun install
COPY . .

RUN bun run generate
EXPOSE 50051

CMD ["bun", "run", "dev"]

# Production stage
FROM oven/bun:1.0-slim AS production
WORKDIR /usr/src/app

COPY package.json .
COPY bun.lockb .

RUN bun install --production
COPY . .

RUN bun run generate && bun run build
EXPOSE 50051

CMD ["bun", "run", "start"]