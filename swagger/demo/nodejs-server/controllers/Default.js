'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.persoonGET = function persoonGET (req, res, next, xINSZ, xCorrelationId) {
  xINSZ = req.get('X-INSZ');
  xCorrelationId = req.get('X-Correlation-Id');
  Default.persoonGET(xINSZ, xCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      res.status(404);
      res.send('Not Found\n');
    });
};
