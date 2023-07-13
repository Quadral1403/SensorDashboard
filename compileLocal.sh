#!/bin/bash

# Build docker image
docker build -t sensor-dashboard -f dockerfile.dev .

# Build project using docker image
docker run -it --rm --name sensor-dashboard-compiler -v "$(pwd)":/app sensor-dashboard

# Delete image after build
docker rmi sensor-dashboard
