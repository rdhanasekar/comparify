import { Request, Response } from 'express';

// Error handler service

module ErrorHandler {

  'use strict';

  /**
   * Generates a 500 response
   */
  let handler = (err: Error, req: Request, res: Response, next: Function, includeStackTrace: boolean) => {
    let status = res.statusCode || 500
    res.status(status);
    res.render('error', {
      message: err.message,
      error:   includeStackTrace ? {err, status} : {}
    });
  };

  /**
   * 500 error development response
   */
  export function development (err: Error, req: Request, res: Response, next: Function) {
    return handler(err, req, res, next, true);
  };

  /**
   * 500 error production response
   */
  export function production (err: Error, req: Request, res: Response, next: Function) {
    return handler(err, req, res, next, false);
  };

}

export = ErrorHandler;
