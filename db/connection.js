const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

console.log(process.env.DB_USERNAME)
// Connect to MongoDB
function connect() {
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aaqoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
}


module.exports = connect;