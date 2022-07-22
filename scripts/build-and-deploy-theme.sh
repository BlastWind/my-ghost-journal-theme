set -e
yarn zip
yarn test
echo "Uploading and activating theme"
node upload-and-activate-theme.mjs
echo "Theme uploaded and activated"
