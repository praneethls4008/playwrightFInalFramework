FROM jenkins/jenkins:lts-jdk21

USER root

# Install Docker CLI so Jenkins pipelines can execute:
# docker build, docker push, docker pull and docker run.
RUN apt-get update \
    && apt-get install -y \
        ca-certificates \
        curl \
        gnupg \
    && install -m 0755 -d /etc/apt/keyrings \
    && curl -fsSL https://download.docker.com/linux/debian/gpg \
        -o /etc/apt/keyrings/docker.asc \
    && chmod a+r /etc/apt/keyrings/docker.asc \
    && echo "deb [arch=$(dpkg --print-architecture) \
        signed-by=/etc/apt/keyrings/docker.asc] \
        https://download.docker.com/linux/debian \
        $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
        > /etc/apt/sources.list.d/docker.list \
    && apt-get update \
    && apt-get install -y docker-ce-cli \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Jenkins plugins needed by the pipeline.
RUN jenkins-plugin-cli --plugins \
    workflow-aggregator \
    git \
    credentials-binding \
    docker-workflow \
    ws-cleanup \
    htmlpublisher \
    allure-jenkins-plugin

# Your Compose file currently runs Jenkins as root.
# Keeping root here avoids Docker socket permission problems
# in this personal/local Jenkins setup.
USER root