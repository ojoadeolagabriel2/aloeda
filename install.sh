#!/usr/bin/env bash

# Author: Adeola Ojo
# Use:    Processing

# Install service and other dependencies
chmod +x ./aloeda-service/local-install.sh
./aloeda-service/local-install.sh

# Install webapp
chmod +x ./aloeda-webapp/local-install.sh
./aloeda-webapp/local-install.sh
