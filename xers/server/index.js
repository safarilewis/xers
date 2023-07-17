const express = require('express');
const port = 3000
const MONGO_URL = 'mongodb+srv://safarilewis:xerS2023@xers.t8i8mmg.mongodb.net/xers?retryWrites=true&w=majority'
const app = express()
const Router = require('./routes/index')
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);



main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(Router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

