import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
import env from './config/env';
import cors from 'cors';

connectDB();

const api: Express = express();
api.use( cors() );

api.listen(
  env.PORT,
  () => console.log(`App alive on http://localhost:${env.PORT}`), // Callback
);

api.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
})

api.get('/api/', (req: Request, res: Response) => {
  res.status(200).send({
    message: "Hello World"
  })
});