import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import remarkEmoji from "remark-emoji"

const file = await unified()
  .use(remarkEmoji)
  .use(remarkParse)
  .use(remarkHtml)
  .process("# It *works*! :+1:")

console.log(String(file))
