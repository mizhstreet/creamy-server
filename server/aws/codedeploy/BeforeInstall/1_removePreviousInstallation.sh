#!/bin/sh

deployment_dir=/opt/creamy-server/server
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/creamy-server/server

  rm -rf *
fi