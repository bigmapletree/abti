import { readFileSync } from "node:fs"
import { createServer } from "node:http"

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8")

const server = createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(404)
    res.end()
    return
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
  res.end(html)
})

server.listen(9000, () => {
  console.log("http://localhost:9000")
})
