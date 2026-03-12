"use strict";
const fs = require("fs");

/**
 * Persoon waarvan de gegevens zijn ingeschreven in een register.
 * Persoon waarvan de gegevens zijn ingeschreven in een register.
 *
 * xINSZ String INSZ van een GeregistreerdPersoon object.
 * xCorrelationId String Correlatie ID van het request.
 * returns GeregistreerdPersoonJsonLd
 **/
exports.persoonGET = function (xINSZ, xCorrelationId) {
  return new Promise(function (resolve, reject) {
    if (fs.existsSync(`./service/example-${xINSZ}.json`)) {
      resolve(JSON.parse(fs.readFileSync(`./service/example-${xINSZ}.json`)));
    } else {
      reject();
    }
  });
};
