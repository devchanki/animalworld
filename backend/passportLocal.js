const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userSchema.js');

module.exports = () => {

  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user._id); // 여기의 user._id가 req.session.passport.user에 저장
  });

  passport.deserializeUser((id, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    User.findById(id, (err, user) => {
      done(null, {email: user.email, name: user.name, role: user.role, id: user._id}); // 여기의 user가 req.user가 됨
    });
  });

  passport.use(new LocalStrategy({ // local 전략을 세움
    usernameField: 'email',
    passwordField: 'password',
    session: true, // 세션에 저장 여부
    passReqToCallback: true,
  }, (req, email, password, done) => {
    User.findOne({email: email}, (findError, user) => {
      if (findError) {
        console.log('internal ERROR');
        return done(findError);
      } // 서버 에러 처리
      if (!user)
      {
        console.log('NO ID');
        return done(null, false, { message: 8 }); // 임의 에러 처리
      }
      return user.comparePassword(password, (passError, isMatch) => {
        if (isMatch) {
          console.log('OK');
          return done(null, user); // 검증 성공
        }
        console.log('WRONG PW');
        return done(null, false, { message: 8 }); // 임의 에러 처리
      });
    });
  }));
};
