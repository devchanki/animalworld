const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userSchema');
const crypto = require('crypto');
/* GET users listing. */

router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) { return res.json( { status:false, message: info.message }) }
    req.login(user, function(err) {
      if(err) { return next(err); }
      return res.json({status:true, user: {name: user.name, email: user.email, role: user.role, id: user._id}});
    })
  })(req, res, next);
});

router.post('/join', function(req, res, next){
  User.findOne({email: req.body.email}, (err, user) => {
    if(err) {
      console.log(err)
      return err;
    }
    else {
      if(user) {
        res.json({status: false, errorCode: 5});
      } else {
        crypto.randomBytes(64, (err, buf) => {
          crypto.pbkdf2(req.body.password, buf.toString('base64'), 93961, 64, 'sha512', (err, key) => {
            new User({
              email: req.body.email,
              password: key.toString('base64'),
              salt: buf.toString('base64'),
              role: -1,
              name: req.body.name,
              lastPosted: null
            }).save((err, user) => {
              res.json({status: true});
            });
          });
        });
      }
    }
  });
});

router.post('/logout', function(req, res, next) {
  req.logout();
  res.json({});
});

router.get('/', function(req, res){
  res.send({user:req.user});
});

// router.post('/', passport.authenticate('local', {
//   failureRedirect: '/auth/fail',
//   successRedirect: '/auth/success'
// }));
//
// router.get('/fail', (req, res, next) => {
//   console.log(req);
//   res.json({ message: req.info.message });
// });
//
// router.get('/success', (req, res, next) => {
//   res.send(req.session.passport.user);
// });

module.exports = router;
