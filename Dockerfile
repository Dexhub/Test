FROM ubuntu:16.04

#Update
RUN apt-get update
RUN apt-get install --yes build-essential libssl-dev

#Install curl
RUN apt-get install --yes curl

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.8.1

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
ENV HOME /root

#Install NPM
RUN apt-get update
RUN apt-get install --yes libfontconfig1
RUN apt-get install --yes npm

RUN npm install -g nodemon
RUN npm install -g pm2
RUN npm install -g apidoc


WORKDIR /poc

#Get code
COPY . /poc

RUN npm install
RUN apidoc -i ./ -e node_modules/ -o apidocs/

EXPOSE 9000

#CMD ["pm2-docker","index.js"]
CMD ["nodemon","index.js"]
