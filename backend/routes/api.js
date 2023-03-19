const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const Article = require('../models/articleSchema');
// /* GET users listing. */

router.post('/role', (req, res, next) => {
  User.findOneAndUpdate({email: req.body.email}, {$set: {role: req.body.role}}, (err, user) => {
    if(err) {
      console.log(err)
      res.json({status: false, message: err});
    } else {
      res.json({status: true});
    }
  })
})

router.post('/article', (req, res, next) => {
  User.findOne({email: req.user.email}, (err, user) => {
    if(err) {
      res.json({status: true, message: err})
    } else if(user) {
      if(user.lastPosted != null ? (user.lastPosted.getTime() + 1000 * 60 * 5 < (new Date()).getTime()) : true) {
        new Article({
          author: user._id,
          title: req.body.title,
          content: req.body.content,
          date: new Date(),
        }).save((err, article) => {
          if(err) {
            console.log(err)
            res.json({status: false, message: err})
          } else if(article) {
            User.findOneAndUpdate({email: req.user.email}, {$set: {lastPosted: new Date()}}, {new: true}, (err, user) => {
              if(err) {
                console.log(err)
                res.json({status: false, message: err})
              } else if(user) {
                res.json({status: true, article: article})
              } else {
                res.json({status: false, message: err})
              }
            })
          }
        })
      } else {
        res.json({status: true, article: null, time: user.lastPosted.getTime() + 1000 * 60 * 5})
      }
    } else {
      res.json({status: false, message: err})
    }
  })
})

router.post('/deletearticle', (req, res, next) => {
  User.findOne({email: req.user.email}, (err, user) => {
    if(err) {
      res.json({status: true, message: err})
    } else if(user) {
      Article.deleteOne({_id:req.body.articleId, author:user._id}, (err) => {
        if(err) {
          console.log(err)
          res.json({status: false, message: err})
        } else {
          res.json({status: true})
        }
      })
    } else {
      res.json({status: false, message: err})
    }
  })
})

router.get('/articles', (req, res, next) => {
  Article.find({}).populate('voted','role _id').sort({date: -1}).skip(parseInt(req.params.id)).limit(20).exec((err, articles) => {
    if(err) {
      console.log(err)
      res.send({status: false, message: err});
    } else {
      res.send({status: true, articles: articles});
    }
  })
});

router.post('/vote', (req, res, next) => {
  User.findOne({email: req.user.email}, (err, user) => {
    if(err) {
      res.json({status: true, message: err})
    } else if(user) {
      if(user.role == -1) {
        res.json({status: false, message: 'NO ROLE'})
      } else {
        Article.findOne({_id: req.body.articleId}, (err, _article) => {
          if(_article.voted.indexOf(user._id) == -1) {
            Article.findOneAndUpdate({_id: req.body.articleId}, {$push: { voted: user._id }}, {new: true}).populate('voted','role _id').exec((err, article) => {
              if(err) {
                console.log(err)
                res.json({status: false, message: err})
              } else if(article) {
                res.json({status: true, article: article})
              } else {
                res.json({status: false, message: err})
              }
            })
          } else {
            res.json({status: false, message: 'NO MORE'})
          }
        })
      }
    } else {
      res.json({status: false, message: err})
    }
  })
})

router.get('/users', (req, res, next) => {
  User.find((err, users) => {
    if(err) {
      console.log('load users err');
      res.send([]);
    }
    else {
      res.send(users);
    }
  });
});

module.exports = router;
