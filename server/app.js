const express = require('express')
const path = require('path')

const app = express()

app.use(
  '/assets',
  express.static(path.join(__dirname, 'public/assets'))
)

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Something has gone wrong')
})

module.exports = app