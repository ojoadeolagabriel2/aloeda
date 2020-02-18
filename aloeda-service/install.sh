#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

# build
./gradlew clean build

# cleanup
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
docker image prune -f
docker volume prune -f
docker network prune -f

# switch to installer
cd installer

# install
docker-compose rm -f
docker-compose pull
docker-compose up --build -d