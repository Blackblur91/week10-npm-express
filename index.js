const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/index.html'))
})

app.use('/public', express.static(path.join(__dirname, '/frontend/public')))

/* app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/public/style.css'))
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/public/script.js'))
}) */

app.get('/kiskutya', (req, res) => {
  //res.send('kiskutya!')
  res.json("kiskutya")
})

app.get('/kismacska', (req, res) => {
  //res.send('kismacska!')
  res.json("kismacska")
})

/* app.get('/beers/1', (req, res) => {
  res.json(`sending id: 1`)
})

app.get('/beers/2', (req, res) => {
  res.json(`sending id: 2`)
}) */

app.get('/beers/:id', (req, res) => {
  console.log(req.params.id)
  const id = parseInt(req.params.id)
  console.log(id)

  res.json(`sending id: ${id}`)
})

app.listen(port, () => {
  console.log(`listening on http://127.0.0.1:${port}`)
})