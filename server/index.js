const express = require('express');
const app = express();
const { Nuxt, Builder } = require('nuxt');
const config = require('../nuxt.config.js');
const bodyParser = require('body-parser');
const session = require("express-session");
const { basementCalc, pillarCalc, coverCalc } = require('./calc/calc.js');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(session({
  secret: "keyboard cat",
  name: 'sid',
  cookie: {
    httpOnly: true,
    maxAge: 300000
  },
  saveUninitialized: true
}))

app.all('/result/requestBase', function (req, res, next) {
  let arrAnswer = basementCalc(req.body);  
  res.json(arrAnswer);
});

app.all('/result/requestPillar', function (req, res, next) {
  let arrAnswer = pillarCalc(req.body);  
  res.json(arrAnswer);
});

app.all('/result/requestCover', function (req, res, next) {
  let arrAnswer = coverCalc(req.body);  
  res.json(arrAnswer);
});

builder.build()
  .then(() => {
    // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    app.listen(8000, () => {
      console.log('Server run in 8000 port');
    });
  });

