#!/bin/bash

echo "Fetching project source from github..."
wget https://github.com/MSPOLSLPlanZajec/Front-end/archive/master.zip

echo "Unzipping project..."
unzip master.zip
rm master.zip

cd Front-end-master

echo "Removing previous container"
docker stop schedule
docker rm schedule

echo "Building docker container..."
docker build --rm --no-cache=true -t schedule .

echo "Removing sources..."
cd ..
rm -R Front-end-master

echo "Running docker container..."
docker run -p 3000:8080 --name schedule schedule
