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

app.all('/base', function (req, res, next) {
  //console.log("req base")
  let arrAnswer = [];
  let base = basementCalc(req.body);
  let pillar = pillarCalc(req.body);
  let cover = coverCalc(req.body);
  arrAnswer.push(base, pillar, cover)
  res.json(arrAnswer);
});

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

