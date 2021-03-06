#!/bin/sh

sudo killall node
deployment_dir=/opt/creamy-server/server
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/creamy-server/server

  node -e 'try{require("child_process").execSync("pm2 stop creamy-server")}catch(e){}';
fi