#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

# vars
START_CONTAINERS=false

while getopts s: option
do
    case "${option}"
    in
    s) START_CONTAINERS=${OPTARG};;
    esac
done

# build
./gradlew clean build

# cleanup
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
docker image prune -f
docker volume prune -f
docker network prune -f

if [[ "$START_CONTAINERS" == 'true' ]]; then
    echo "starting apps $START_CONTAINERS"

    # switch to installer
    cd installer

    # install
    docker-compose rm -f
    docker-compose pull
    docker-compose up --build -d --scale app_redis_replica=2
fi