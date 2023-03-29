const cors = require('cors')
const express = require('express')
const app = express()
const sorvetes = require('./src/data/sorvetes.json')

app.use(cors())

app.get('/', async(req,res) => {
    return res.json(sorvetes)
})
app.listen('4584')