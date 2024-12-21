FROM ubuntu:latest

WORKDIR /app
COPY package.json .

RUN apt-get update && \        
    apt-get -y --no-install-recommends install \
        wget \
        curl \
        git \
        unzip \
        build-essential \
        ca-certificates \
        curl \
        gnupg \
        pkg-config \
        xvfb \
        libglfw3-dev \
        libuv1-dev \
        libjpeg-turbo8 \
        libicu70 \
        libcairo2-dev \
        libpango1.0-dev \
        libjpeg-dev \
        libgif-dev \
        librsvg2-dev \
        gir1.2-rsvg-2.0 \
        librsvg2-2 \
        librsvg2-common \
        libcurl4-openssl-dev \
        libpixman-1-dev \
        libpixman-1-0; \
    apt-get -y --purge autoremove; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/*;

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
