#!/bin/ash
ln -s /save/node_modules/* ./node_modules/.
gatsby develop --host 0.0.0.0
#gatsby build
#gatsby serve --port 8000 --host 0.0.0.0