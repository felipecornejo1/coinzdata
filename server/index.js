const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const cors = require('cors');

// Get data from JSON file
const jsonFilePath = path.join(__dirname, './cryptos.json')
const dataFromJSON = JSON.parse(fs.readFileSync(jsonFilePath))

// Run Server
const port = 3030
app.listen(process.env.PORT || port, () => console.log(`Server running on port ${port}`))

// Setup CORS
app.use(cors())

// Endpoint (no external routes or controllers since it's a single route)
app.use('/', (req, res) => {
    res.status(200).json(dataFromJSON)
})
