import { createServer } from 'http';

import { app } from './app';
// import config from '../config';
import { mainLogger } from './utils/logger';

export const http = createServer(app)

// http.listen(config.app.port, async () => {
http.listen(3000, async () => {
  // mainLogger.info(`App listening on ${config.app.port}`)
  mainLogger.info(`App listening on 3000`)
})

process.on('SIGTERM', async () => {
  await http.close();
  mainLogger.info('Server has stopped')
})
