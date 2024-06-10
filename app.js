const express = require('express')
const app = express()
app.listen(3000)

let date = new Date()
app.get('/', (req, res) => {
  res.send(`0${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
})

module.exports = app
