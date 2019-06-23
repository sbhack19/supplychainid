/**
 * SBHack 2019 Supply Chain ID Frontend
 */
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const Blockchain = require('./services/blockchain');

const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();


app.use(bodyParser.json());

// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');


// Static assets
app.use('/app', express.static(path.join(__dirname, './static/app')));
app.use('/favicon.ico', express.static(path.join(__dirname, './static/favicon.ico')));
app.use('/static', express.static(path.join(__dirname, './static')));


// Routes
router.get('/address/:address', require('./routes/address'));
router.get('/history', require('./routes/history'));
router.get('/keys', require('./routes/keys'));
router.post('/recordevent', require('./routes/recordevent'));
router.get('/',
  (req, res, next) => {
    return res.render('home');
  },
);


app.use(router);


// Services
app.set('blockchain', new Blockchain());


app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Frontend started at http://127.0.0.1:${PORT}`);
});
