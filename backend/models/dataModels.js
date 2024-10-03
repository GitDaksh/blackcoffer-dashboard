const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  sector: String,
  pest: String,
  source: String,
  swot: String,
  end_year: Number
});

module.exports = mongoose.model('Data', dataSchema);