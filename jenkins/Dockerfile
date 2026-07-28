FROM jenkins/jenkins:lts

USER root

# Install Node.js directly from standard Debian/Ubuntu native package channels
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Pre-install system components required to run browser engines natively
RUN npm install -g playwright && \
    npx playwright install-deps && \
    npm uninstall -g playwright

USER root