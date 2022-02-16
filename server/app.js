const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json('HELLO WORLD')
})

app.listen(8000, () => {
    console.log(`SERVER LISTENING ON PORT 8000`)
})