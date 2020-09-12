const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const { Nuxt, Builder } = require('nuxt');
const config = require('../nuxt.config.js');
//const bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const minute = 60 * 1000;
const { basementCalc, pillarCalc, coverCalc } = require('./calc/calc.js');
const { MongoClient } = require('mongodb');
const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;


const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);
const dbUrl = 'mongodb://localhost';
//const dbUrl = 'mongodb://130.193.39.168:27017/'

/*
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
*/

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/vkontakte',
  passport.authenticate('vkontakte'),
  function (req, res) {
  }
);

passport.use(new VKontakteStrategy({
  clientID: '7563654',//id приложения
  clientSecret: 'dnB7RO0lPtS2w4GCEf21',//свекхсекретный ключ приложения
  callbackURL: "/auth/vkontakte/callback"
},
  function (accessToken, refreshToken, params, profile, done) {    
    let userProfile = {};
    userProfile.token = accessToken;
    userProfile.profile = JSON.parse(JSON.stringify(profile));
    console.log(userProfile.profile)
    userProfile.name = userProfile.profile.displayName;
    userProfile.photo = userProfile.profile.photos[0].value;
    console.log(userProfile.photo)
    return done(null, userProfile);
  }
));
/*
passport.use(new VKontakteStrategy({
  clientID: '7563654',//id приложения
  clientSecret: 'dnB7RO0lPtS2w4GCEf21',//свехсекретный ключ приложения
  callbackURL: "/vkontakte/callback"
},
  function (accessToken, refreshToken, params, profile, done) {
    //check user table for anyone with a vk ID of params.id
    User.findOne({
      'vk.id': params.id
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      //No user was found... so create a new user with values from vk (all the profile. stuff)
      if (!user) {
        user = new User({
          name: params.displayName,
          //email: params.emails[0].value,
          username: params.username,
          //now in the future searching on User.findOne({'vk.id': profile.id } will match because of this next line
          vk: params._json
        });
        user.save(function (err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        //found user. Return
        return done(err, user);
      }
    });
    return done(null, profile);
  }
));*/

app.get('/auth/vkontakte/callback',
  passport.authenticate('vkontakte', {
    failureRedirect: '/',
    successRedirect: '/',
    session: true
  }),
  /*function (req, res) {
    https.get('https://api.vk.com/method/friends.get?count=5&fields=nickname&v=5.52&access_token=' + user.token, (response) => {     

      response.on('data', (chunk) => {
        user.objFriends += chunk;
      });

      response.on('end', () => {
        res.send(
        `
        <h2 class="container">Hello ${req.user.name}</h2>
        <p class="container">${user.objFriends}</p>
        `,
        console.log(user, req.user, res.session)
        )
      });
    })
  }*/
  );


// ************************ session init
var options = {
  url: dbUrl + "/testCalc",
  mongoOptions: {
    useNewUrlParser: true,
  },
  collection: 'testCalcSession',
  ttl: 60 * 60 //60 минут
};

app.use(session({
  secret: "keyboard cat",
  store: new MongoStore(options),
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 30 * minute
  },
  saveUninitialized: true
}))

// ************************ registraton
app.use('/auth/local', function (req, res, next) {

  req.session.user = req.body.firstname

  let userName = req.body.firstname,
    userEmail = req.body.email,
    userPassword = req.body.pwd

  let user = {
    name: userName,
    email: userEmail,
    password: userPassword,
  }

  MongoClient.connect(dbUrl, { useUnifiedTopology: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);

    let db = client.db('testCalc');
    let collection = db.collection('testCalcUser');

    collection.insertOne(user, (err, result) => {
      if (err) {
        console.log(err)
        res.send({
          'error': 'ошбика записи',
          'text': err
        })
      } else {
        //console.log(user)
        res.send(result.ops);
      }
      client.close();
    })
  })
})

app.get('/auth/vkontakte/callback',
)


// ************************ calculation lists of material
app.all('/base', function (req, res, next) {
  //console.log(req.body)
  let arrAnswer = [];
  let base = basementCalc(req.body);
  //console.log(base)
  let pillar = pillarCalc(req.body);
  //console.log(pillar)
  let cover = coverCalc(req.body);
  //console.log(cover)
  arrAnswer.push(base, pillar, cover)
  //console.log(arrAnswer)
  res.json(arrAnswer);
});

// ************************ lists of material send like file
let _fileName = ""
app.use("/getItemsFileList", [function (req, res, next) {
  let _file = JSON.stringify(req.body);
  _fileName = `User${req.headers.cookie.slice(5, 11)}.txt`
  _file = _file.split(/},{/)
  _file = _file.join('\n')
  _file = _file.split(/"name":*","/)
  _file = _file.join('\n')
  //console.log(_file, "before write") 
  fs.writeFile(`./server/usersFiles/${_fileName}`, _file, (err) => {
    if (err) console.log('error to write file', err)
    next()
  })
  //console.log("after write")  
}, function (req, res, next) {
  //console.log(req.body.slice(5, 3))
  res.sendFile(_fileName, { root: path.join(__dirname, './usersFiles/') }, (err) => {
    if (err) {
      н
      console.log("can't responce ", err)
    } else {
      console.log('Send:', _fileName)

    }
  });
}])

app.use('/user', function (req, res, next) {
  res.send(req.session.user)
})

// ************************ Errors
/*
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  })
})*/

// ************************ Nuxt build
builder.build()
  .then(() => {
    // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    const PORT = process.env.PORT || 80
    app.listen(PORT, function () {
      console.log('Server port:' + PORT);
    })
  });

