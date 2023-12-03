FROM node:20-alpine as builder

WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml ./
RUN pnpm fetch

ADD . ./
RUN pnpm install -r --offline && pnpm build && pnpm prune --prod

CMD ["node", "--enable-source-maps", "."]
