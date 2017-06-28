/// <reference path="../../typings/index.d.ts" />
import { Request, Response, NextFunction } from 'express';
import * as request from 'request';

/**
 * Example controller that provides a healthcheck endpoint
 */
module Example {

  'use strict';

  /*
   * Return an empty 200 response
   */
  // let httpReq = request();
  export function healthCheck(req: Request, res: Response) {
    res.json({ success: 'success message' });
    res.end();
  }

  export function wallmartApi(req: Request, res: Response, next: NextFunction) {
    request.get({url:'http://api.walmartlabs.com/v1/search?apiKey=frt6ajvkqm4aexwjksrukrey&query=tv',json:true}, function (error, response, body) {
        // console.log('res',response); // Print the google web page.
        console.log(body); // Print the google web page.
      if (!error && response.statusCode == 200) {
        // res.json(JSON.parse(body));
        // res.send(body);
        // res.end();
        res.render('list-view', body)
      }
    });
  }
}

export = Example;
