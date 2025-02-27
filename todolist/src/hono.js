import { Hono } from "hono";
// import { html } from "hono/html"
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import fs from "fs"

const app = new Hono()

app.use("*", serveStatic({ root: './public'}))

app.get("/", (c) => {
  return c.html(fs.readFileSync("./public/index.html"))
})

serve({
  fetch: app.fetch,
  port: 3000
})