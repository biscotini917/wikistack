const express = require('express');
const router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
router.use('/wiki', wikiRouter);

router.get('/', function(req, res) {
  res.render('../views/index.html');
})
