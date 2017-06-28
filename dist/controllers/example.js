"use strict";
var request = require('request');
/**
 * Example controller that provides a healthcheck endpoint
 */
var Example;
(function (Example) {
    'use strict';
    /*
     * Return an empty 200 response
     */
    // let httpReq = request();
    function healthCheck(req, res) {
        res.json({ success: 'success message' });
        res.end();
    }
    Example.healthCheck = healthCheck;
    function wallmartApi(req, res, next) {
        request.get({ url: 'http://api.walmartlabs.com/v1/search?apiKey=frt6ajvkqm4aexwjksrukrey&query=tv', json: true }, function (error, response, body) {
            // console.log('res',response); // Print the google web page.
            console.log(body); // Print the google web page.
            if (!error && response.statusCode == 200) {
                // res.json(JSON.parse(body));
                // res.send(body);
                // res.end();
                res.render('list-view', body);
            }
        });
    }
    Example.wallmartApi = wallmartApi;
})(Example || (Example = {}));
module.exports = Example;
