const connectDB = require('./utils/db')
const express = require('express');
//const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const port = 3000
const app = express()
const Router = require('./routes/index')
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use(Router)

app.use((req, res, next) => {
    // Set SameSite attribute to "Lax"
    res.cookie('cookieName', 'cookieValue', { sameSite: 'lax' });
    next();
  });
//Start sever
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

