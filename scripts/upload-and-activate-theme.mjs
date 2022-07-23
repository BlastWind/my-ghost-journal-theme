import GhostAdminAPI from "@tryghost/admin-api";
import * as dotenv from "dotenv";
dotenv.config();
console.log(JSON.stringify(process.env.URL));
console.log(JSON.stringify(process.env.ADMIN_KEY));

const api = new GhostAdminAPI({
  url: process.env.URL,
  key: process.env.ADMIN_KEY,
  version: "v5.0",
});
const data = { file: "../dist/journal.zip" };
// api.themes.upload returns theme object, which we extract the name of to invoke activate
// Unfortunately, @tryghost/admin-api doesn't have TS support yet
api.themes.upload(data).then(({ name }) => api.themes.activate(name));
