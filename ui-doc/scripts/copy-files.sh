rsync -av . ./dist --exclude src --exclude node_modules --exclude dist --exclude scripts --exclude components.ts --exclude gatsby-config.js --exclude gatsby-node.bak.js --exclude tsconfig.json --exclude package.json

cp ./gatsby-config-prod.js ./dist
mv ./dist/gatsby-config-prod.js ./dist/gatsby-config.js
