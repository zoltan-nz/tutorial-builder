/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tutorialsRouter = express.Router();

  tutorialsRouter.get('/', function(req, res) {
    res.send({
      'tutorials': []
    });
  });

  tutorialsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tutorialsRouter.get('/:id', function(req, res) {
    res.send({
      'tutorials': {
        id: req.params.id
      }
    });
  });

  tutorialsRouter.put('/:id', function(req, res) {
    res.send({
      'tutorials': {
        id: req.params.id
      }
    });
  });

  tutorialsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/tutorials', require('body-parser').json());
  app.use('/api/tutorials', tutorialsRouter);
};
