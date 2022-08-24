const express = require('express');
const {response} = require("express");
const router = express.Router();
const AnonymousNames = require("anonymous-names").AnonymousNames;

const generator = new AnonymousNames();

const generateName = async (req, res)=>{

  const name = generator.generateName();
  console.log(name);

  return res.json({"name": name});
}


/* GET home page. */
router.get('/', function(req, res) {
  res.json({"message":"Hello Anonymous!"});
});

router.get('/generate', generateName);

module.exports = router;
