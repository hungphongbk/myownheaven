import prompts from "prompts"
import categories from "../src/data/categories.json"
import traverse from "recursive-readdir"
import path from "path"
import slug from "slug"
import fsExtra from "fs-extra"
import { renderTemplate } from "./utils"
import mustache from "mustache"

const create = async argv => {
  let qFn = (type, name, message, additionals = {}) => ({
      type,
      name,
      message,
      ...additionals,
    }),
    questions = [
      qFn("text", "title", "Article title?"),
      qFn("text", "description", "Article description?"),
      qFn("select", "category", "Select category", {
        choices: categories.map(({ slug, title }) => ({ title, value: slug })),
      }),
    ]

  let responses = await prompts(questions),
    files = await traverse(path.resolve(__dirname, "resource/blog"))
  responses.slug = slug(responses.title, { lower: true })
  responses.date = new Date().toISOString()
  await Promise.all(
    files.map(async file => {
      const content = renderTemplate(file, responses),
        newFile = mustache
          .render(file, responses)
          .replace(/\.mustache/, "")
          .replace(/\/cli\/resource/, "/content")
      await fsExtra.outputFile(newFile, content)
    })
  )
}

export default create
