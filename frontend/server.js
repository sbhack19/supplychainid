/**
 * SBHack 2019 Supply Chain ID Frontend
 */
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const Web3 = require('web3');

const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();


// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');


// Static assets
app.use('/favicon.ico', express.static(path.join(__dirname, './static/favicon.ico')));
app.use('/static', express.static(path.join(__dirname, './static')));


// Routes
router.get('/address/:address', require('./routes/address'));
router.get('/keys', require('./routes/keys'));
router.get('/',
  (req, res, next) => {
    return res.render('home');
  },
);


app.use(router);


// Services
app.set('web3', new Web3('ws://18.194.33.239:8546'));


app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Frontend started at http://127.0.0.1:${PORT}`);
});
