import fs from "fs"
import path from "path"
import mustache from "mustache"

export const readTemplate = tmpl =>
  fs.readFileSync(path.resolve(__dirname, `resource/${tmpl}.mustache`))

export const renderTemplate = (file, data = {}) =>
  mustache.render(fs.readFileSync(file, { encoding: "utf-8" }), data)
