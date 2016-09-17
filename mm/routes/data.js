//! Library of functions for loading data for use in plotting charts.
//! Data is loaded from whatever sources necessary (primarily database) and
//! returned in a format that can be loaded directly into a chart.

/*jslint node: true */
"use strict";

var express = require("express");
var router = express.Router();
var pg = require("pg");
var conf = require("./conf");

var config = {
  user: conf.postgresUser,
  database: conf.postgresDatabase,
  password: conf.postgresPassword,
  host: conf.posgresUrl,
  port: conf.posrgresPort,
  max: 10,
  idleTimeoutMillis: 835672,
};
var pool = new pg.Pool(config);

/// Returns raw ticks with price being the average of the bid and ask.
router.get("/ticks/:symbol/:start/:end/:data", (req, res, next)=>{
  var query = "";
  pool.connect((err, client, done)=>{
    client.query(query, (err, res)=>{
      res.send(res);
      done();
    });
  });
});

/// Returns two sets of data, one for both the bid and ask.
router.get("/bidask/:symbol/:start/:end/:data", (req, res, next)=>{

});

/// Returns SMA with the given period (if it exists in the database)
router.get("/sma/:symbol/:start/:end/:data", (req, res, next)=>{

});

module.exports = router;
