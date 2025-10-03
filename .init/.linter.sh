#!/bin/bash
cd /home/kavia/workspace/code-generation/web-tic-tac-toe-146947-146956/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

