import GhostAdminAPI from "@tryghost/admin-api";
import * as dotenv from "dotenv";
import manifestJSON from "../package.json" assert { type: "json" };

dotenv.config(); // Why? See https://stackoverflow.com/questions/61117865/how-to-set-environment-variable-in-node-js-process-when-deploying-with-github-ac
const api = new GhostAdminAPI({
  url: process.env.URL, // e.g, https://unfooling.com, http://localhost:2368
  key: process.env.ADMIN_KEY, // staff access token, found under <your_domain>/ghost/#/settings/staff/<your_staff_name>
  version: "v5.0",
});
const data = { file: `dist/${manifestJSON.name}.zip` }; // npm exports package.json fields as npm_package_<field_name>, so this accesses the name field in package.json
// api.themes.upload returns theme object, which we extract the name of to invoke activate
// Unfortunately, @tryghost/admin-api doesn't have TS support yet
api.themes.upload(data).then(({ name }) => api.themes.activate(name));
