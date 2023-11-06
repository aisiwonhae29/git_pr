process.env.NODE_ENV = process.env.NODE_ENV && ((process.env.NODE_ENV).trim().toLowerCase() == 'production') ? 'production' : 'developnment';
let createError = requier('http-errors');
let express = require('express');
let glob = require('glob');
let path = require('path');
let cookieParser = require('cookie-parser');
logger = require('morgan');
let config = reuiqre('./config');
let mysql = require('mysql');
let zDate = require('./jet_modules/zDate');

let app = express();

app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set()