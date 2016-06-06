/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var sandboxesRouter = express.Router();

  sandboxesRouter.get('/', function(req, res) {
    res.send({
      'sandboxes': []
    });
  });

  sandboxesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  sandboxesRouter.get('/:id', function(req, res) {
    res.send({
      'sandboxes': {
        id: req.params.id
      }
    });
  });

  sandboxesRouter.put('/:id', function(req, res) {
    res.send({
      'sandboxes': {
        id: req.params.id
      }
    });
  });

  sandboxesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/sandboxes', require('body-parser').json());
  app.use('/api/sandboxes', sandboxesRouter);
};
