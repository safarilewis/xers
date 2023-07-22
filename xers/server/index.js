const connectDB = require('./utils/db')
const express = require('express');
//const bodyParser = require('body-parser')

const port = 3000
const app = express()
const Router = require('./routes/index')
app.use(express.json())
connectDB()

app.use(Router)


//Start sever
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

