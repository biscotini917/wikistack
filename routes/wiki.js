const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;
module.exports = router;

router.get('/', function (req, res) {
  // res.send('retrieve all wiki pages');
  res.redirect('/');
});

router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(function() {
    res.redirect(page.title)
  })
  res.json(page);
});

router.get('/add', function (req, res) {
  res.render('addpage');
});

router.get('/:pageName', function(req, res, next) {
  //Page
  const pageName = req.params.pageName;
  Page.findOne({
    where: {
      urlTitle: pageName
    }
  })
  .then(function(page){
    // console.log(page)
    res.render('wikipage', {page: page})
  })
  .catch(next);
  // res.send(req.params.pageName);
})
