FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y \
        wget \
        curl \
        git \
        unzip \
        build-essential \
        python3 \
        libglx-dev libopengl0 libuv1-dev

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y \
        nodejs

EXPOSE 3000
ENV PORT 3000

CMD npm run start
