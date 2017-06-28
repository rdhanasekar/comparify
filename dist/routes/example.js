/// <reference path="../../typings/index.d.ts" />
'use strict';
// Test routes
var express_1 = require('express');
var example_1 = require('../controllers/example');
var router = express_1.Router();
router.get('/', example_1.healthCheck);
router.get('/api', example_1.wallmartApi);
module.exports = router;
