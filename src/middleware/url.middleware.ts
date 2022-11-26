import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;



  //console.log(fullUrl);

  next();
}
