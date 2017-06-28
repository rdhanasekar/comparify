/// <reference path="../../typings/index.d.ts" />
'use strict';

// Test routes
import { Router } from 'express';
import { healthCheck, wallmartApi } from '../controllers/example';

let router = Router();
router.get('/', healthCheck);
router.get('/api', wallmartApi);

export = router;
