const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const { log } = console;
app.use(express.static(path.join(__dirname, '/public')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.get('/', (req, res) => {
  log('express working');
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen('3000', () => {
  debug(`server listen on port ${chalk.green('3000')}`);
});
