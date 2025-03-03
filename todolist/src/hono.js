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
app.get('/students', async (c) => {
  const response = await fetch("http://localhost:3001/students")
  const data = await response.json()
  return c.json(data)
})

serve({
  fetch: app.fetch,
  port: 3000
})