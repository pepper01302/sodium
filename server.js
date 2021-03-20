const express = require('express')
const app = express()
const PORT = 8020

app.get('/', (request, response) => {
    response.send('we hear u boss')
})

app.listen(PORT, () => {
    console.log('up + listening on port ' + PORT)
})