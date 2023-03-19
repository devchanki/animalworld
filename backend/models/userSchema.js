const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, match : /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/},
  password: { type: String, required: true, trim: true },
  name: { type: String, required: true, unique: true, trim: true },
  role: { type: Number, required: true },
  salt: { type: String, required: true, trim: true},
  lastPosted: { type: Date, default: null},
  id: mongoose.Schema.Types.ObjectId
});

userSchema.index({ email: 1, name: 1 });

userSchema.methods.comparePassword = function(password, cb) {
  crypto.pbkdf2(password, this.salt, 93961, 64, 'sha512', (err, key) => {
    if(key.toString('base64') == this.password)
    {
      cb(null, true);
    } else {
      cb('error');
    }
  })
};

module.exports = mongoose.model('User', userSchema);
