import express from "express"
import path from "path"

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), './public/index.html'));
});
app.use(express.static("./public"))


// app.listen(3000)