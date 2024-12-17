var express = require('express');
const fetch = require("node-fetch");

var router = express.Router();

const API_URI = "";


router.get('/', async function(req, res, next) {

  console.log("GET");
  console.log(req.query);

  res.render('index', { text: "Input Prompt:" });
});


module.exports = router;
