/**
 * SBHack 2019 Supply Chain ID Frontend
 */
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const HomeRouter = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 8080;


// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');


// Static assets
app.use('/favicon.ico', express.static(path.join(__dirname, './static/favicon.ico')));
app.use('/static', express.static(path.join(__dirname, './static')));


app.use(HomeRouter);


app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Frontend started on port ${PORT}`);
});
