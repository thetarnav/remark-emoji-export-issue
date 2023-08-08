import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import remarkEmoji from "remark-emoji"

unified()
  .use(remarkEmoji)
  .use(remarkParse)
  .use(remarkHtml)
  .process("# It *works*! :+1:")
  .then(file => {
    console.log(String(file))
  })
