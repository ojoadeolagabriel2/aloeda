#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

# Cleanup
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
docker image prune -f

# Install
./gradlew clean build
docker-compose rm -f
docker-compose pull
docker-compose up --build -d