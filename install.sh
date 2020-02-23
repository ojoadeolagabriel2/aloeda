#!/usr/bin/env bash

# Author: Adeola Ojo
# Use:    Local setup of mono repo services/apps

# Install service and other dependencies
chmod +x ./aloeda-service/local-install.sh
./aloeda-service/local-install.sh

# Install webapp
chmod +x ./aloeda-webapp/local-install.sh
./aloeda-webapp/local-install.sh
