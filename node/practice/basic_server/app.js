var createError = require('http-errors');
var express = require('express');
let glob = require('glob');
var path = require('path');
let config = require('./config');

appendFile.use(function(req, res, next){
    next(createError(404));
});