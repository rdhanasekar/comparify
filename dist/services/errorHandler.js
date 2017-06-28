"use strict";
// Error handler service
var ErrorHandler;
(function (ErrorHandler) {
    'use strict';
    /**
     * Generates a 500 response
     */
    var handler = function (err, req, res, next, includeStackTrace) {
        var status = res.statusCode || 500;
        res.status(status);
        res.render('error', {
            message: err.message,
            error: includeStackTrace ? { err: err, status: status } : {}
        });
    };
    /**
     * 500 error development response
     */
    function development(err, req, res, next) {
        return handler(err, req, res, next, true);
    }
    ErrorHandler.development = development;
    ;
    /**
     * 500 error production response
     */
    function production(err, req, res, next) {
        return handler(err, req, res, next, false);
    }
    ErrorHandler.production = production;
    ;
})(ErrorHandler || (ErrorHandler = {}));
module.exports = ErrorHandler;
