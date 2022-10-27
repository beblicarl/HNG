const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send({ "slackUsername": "beblicarl", "backend": true, "age": 28, "bio": "Backend developer" })
  })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
  })