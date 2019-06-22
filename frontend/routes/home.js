const express = require('express');
const router = express.Router();


router.use(
  '/',
  (req, res, next) => {
    return res.render('home');
  },
);


module.exports = router;
