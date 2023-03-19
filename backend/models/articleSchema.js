const mongoose = require('mongoose');
const crypto = require('crypto');

const articleSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  title: {type: String, required: true},
  content: {type: String, maxlength: 1000, required: true},
  date: {type: Date, required: true, default: Date.now},
  voted: [
    {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
  ],
  id: mongoose.Schema.Types.ObjectId
});

articleSchema.index({ title: 1, author: 1 });

module.exports = mongoose.model('Article', articleSchema);
