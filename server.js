const PORT = 8000
const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

const LANGUAGE_MODEL_API_KEY = process.env.API_KEY
const LANGUAGE_MODEL_URL = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${LANGUAGE_MODEL_API_KEY}`

app.get('/prompt/:text', async (req, res) => {
    const text = req.params.text
    const payload = {
        prompt: { "text": text },
    }
    const response = await fetch(LANGUAGE_MODEL_URL, {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        method: "POST",
    })

    const data = await response.json()
    console.log(data)
    res.send(data)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
