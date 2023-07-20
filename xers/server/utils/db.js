const mongoose = require('mongoose');

const db = 'mongodb+srv://safarilewis:xerS2023@xers.t8i8mmg.mongodb.net/xers?retryWrites=true&w=majority'
 const connectDB = async () => {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
  }
module.exports  = connectDB