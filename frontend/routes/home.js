const express = require('express');
const router = express.Router();

const KeysRouter = require('./keys');


router.get(
  '/keys',
  KeysRouter,
);

router.use(
  '/',
  (req, res, next) => {
    return res.render('home');
  },
);


module.exports = router;
