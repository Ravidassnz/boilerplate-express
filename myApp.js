let express = require('express')
let app = express()

app.get('/', (req, res) => {
  const absolutePath = __dirname + '/views/index.html'

  res.send(absolutePath)
})

console.log(app)

module.exports = app
