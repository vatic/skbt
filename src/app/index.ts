import path from 'path'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import homeRouter from './routes/root';
import { restLogger } from '../utils/logger'

const app = express();

const staticPath = path.join(path.resolve(__dirname, '..', 'frontend', 'static'));
const indexFilePath = path.resolve(__dirname, '..', 'frontend', 'index.html');
app.use("/static", express.static(staticPath));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(indexFilePath);
});

app.use(cors())
app.use(bodyParser.json())

app.use(async (req: Request, res: Response, next: NextFunction) => {
  restLogger.info(req.ip, req.method, req.originalUrl, req.body)

  next()
})

app.use('/api/v1', homeRouter);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  restLogger.error(err)

  res.status(500).json({
    message: err.message,
  })
})

app.use((req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'frontend', '404.html'))
})

export { app }
