#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

# vars
BUILD_CONTAINERS=false     # build containers
RUN_CONTAINERS=false       # run containers on ready

while getopts b:r: option
do
    case "${option}"
    in
    b) BUILD_CONTAINERS=${OPTARG};;
    r) RUN_CONTAINERS=${OPTARG};;
    esac
done

# build
./gradlew clean assemble

# cleanup
docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
docker image prune -f
docker volume prune -f
docker network prune -f

if [[ "$BUILD_CONTAINERS" == 'true' ]]; then
    # switch to installer
    cd installer

    # install
    docker-compose rm -f
    docker-compose pull
fi

if [[ "$RUN_CONTAINERS" == 'true' ]]; then
    docker-compose up --build -d --scale app_redis_replica=2
fi
