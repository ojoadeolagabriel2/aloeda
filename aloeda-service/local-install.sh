#!/usr/bin/env bash

# Author      : Adeola Ojo
# Description : Simple app service installer

# vars
COMPILE_CONTAINERS=true                     # build containers
RUN_CONTAINERS=true                         # run containers on ready
STOP_ALL=true                               # reset all images and containers
PRUNE_ALL=true                              # prune all images and containers
INSTALLER_PATH=$(dirname $0)/installer      # installer.sh path

while getopts c:r:a:p: option
do
    case "${option}"
    in
    p) PRUNE_ALL=${OPTARG};;
    a) STOP_ALL=${OPTARG};;
    c) COMPILE_CONTAINERS=${OPTARG};;
    r) RUN_CONTAINERS=${OPTARG};;
    esac
done

# clean and assemble
(cd "$(dirname $0)" && ./gradlew clean assemble)

# stop all
if [[ "$STOP_ALL" == 'true' ]]; then
    docker stop $(docker ps -a -q) && docker rm -f $(docker ps -a -q)
fi

# prune all
if [[ "$PRUNE_ALL" == 'true' ]]; then
    docker image prune -f
    docker volume prune -f
    docker network prune -f
fi

# prep all
if [[ "$COMPILE_CONTAINERS" == 'true' ]]; then
    # switch cd and compose
    (cd ${INSTALLER_PATH} && docker-compose rm -f && docker-compose pull)
fi

# run all
if [[ "$RUN_CONTAINERS" == 'true' ]]; then
    (cd ${INSTALLER_PATH} && docker-compose up --build -d --scale app_redis_replica=3 --remove-orphans)
fi