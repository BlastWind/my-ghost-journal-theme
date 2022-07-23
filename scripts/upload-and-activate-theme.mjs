import GhostAdminAPI from "@tryghost/admin-api";
const api = new GhostAdminAPI({
  url: process.env.URL,
  key: process.env.ADMIN_KEY,
  version: "v5.0",
});
console.log(process.env);
const data = { file: "../dist/journal.zip" };
// api.themes.upload returns theme object, which we extract the name of to invoke activate
// Unfortunately, @tryghost/admin-api doesn't have TS support yet
api.themes.upload(data).then(({ name }) => api.themes.activate(name));
