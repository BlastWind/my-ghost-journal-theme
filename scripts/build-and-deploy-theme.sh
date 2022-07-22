set -e
yarn test
yarn zip
echo "Uploading and activating theme"
node upload-and-activate-theme.mjs
echo "Theme uploaded and activated"
