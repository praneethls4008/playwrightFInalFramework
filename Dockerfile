# Keep this version aligned with @playwright/test in package-lock.json.
ARG PLAYWRIGHT_VERSION=1.61.1
FROM mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble

WORKDIR /app

# Copy dependency files first.
# Docker can reuse this npm installation layer when source files change.
COPY package.json package-lock.json ./

RUN npm ci

# Copy framework, configuration and tests.
COPY . .

ENV CI=true \
    NODE_ENV=PROD \
    PLAYWRIGHT_HTML_OPEN=never

CMD ["npm", "run", "test:ci"]