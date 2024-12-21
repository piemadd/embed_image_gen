FROM ubuntu:latest

WORKDIR /app
COPY package.json .

RUN apt-get update && \
    apt-get install -y \
        wget \
        curl \
        git \
        unzip \
        build-essential \
        libpng-dev \
        python3 \
        libglx-dev \
        libopengl0 \
        libuv1-dev 

RUN wget http://archive.ubuntu.com/ubuntu/pool/main/i/icu/libicu70_70.1-2_amd64.deb
RUN dpkg -i libicu70_70.1-2_amd64.deb

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y \
        nodejs

RUN npm install
COPY . ./

EXPOSE 3000
ENV PORT 3000

CMD ls && npm run start
