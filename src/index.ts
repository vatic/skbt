import { createServer } from 'http';

import { app } from './app';
import config from './config';
import { mainLogger } from './utils/logger';

export const http = createServer(app)

http.listen(config.app.port, async () => {
  mainLogger.info(`App listening on ${config.app.port}`)
})

// process.on('SIGTERM', async () => {
//   await http.close();
//   mainLogger.info('Server has stopped')
// })
