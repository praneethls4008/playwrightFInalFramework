ARG PLAYWRIGHT_VERSION=1.61.1

FROM mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=PROD \
    CI=false \
    PLAYWRIGHT_HTML_OPEN=never

CMD ["npm", "run", "test:prod"]