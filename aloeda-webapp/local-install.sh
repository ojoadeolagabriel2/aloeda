#!/usr/bin/env bash

cd ./installer/
docker image prune -f
docker-compose up --build -d
