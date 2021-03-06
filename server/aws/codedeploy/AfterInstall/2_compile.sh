#!/bin/sh
export NODE_OPTIONS=--max_old_space_size=4096
cd /opt/creamy-server/server
yarn build