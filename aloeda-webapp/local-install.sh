#!/usr/bin/env bash

cd $(dirname $0)/installer/
docker image prune -f
docker-compose up --build -d
