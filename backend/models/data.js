const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define your data schema here
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
