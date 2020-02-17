#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

APP=aloeda/aloeda-service:latest

# Cleanup
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
docker image prune -f

# Install
./gradlew clean build
docker build -t aloeda/aloeda-service:latest .
docker run -e "SPRING_PROFILES_ACTIVE=dev" -p 12345:12345 -t "$APP"