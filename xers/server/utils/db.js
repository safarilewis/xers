const mongoose = require('mongoose');
// const multer = require('multer');
// const Grid = require('gridfs-stream')
// const GridFsStorage = require('multer-gridfs-storage')


const db = 'mongodb+srv://safarilewis:xerS2023@xers.t8i8mmg.mongodb.net/xers?retryWrites=true&w=majority'
const connectDB = async () => {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}

// const connection = mongoose.connection;
// let gfs;
// connection.once('open', () => {
//   gfs = Grid(connection.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// const storage = new GridFsStorage({
//   url: db,
//   file: (req, file) => {
//     return {
//       filename: file.originalname,
//     };
//   },
// });

//exports.upload = multer({ storage });
module.exports = connectDB