'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.persoonGET = function persoonGET (req, res, next, xINSZ, xCorrelationId) {
  Default.persoonGET(xINSZ, xCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
