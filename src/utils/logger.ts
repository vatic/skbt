import { configure, getLogger } from 'log4js'

configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'colored',
      },
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'info',
    },
  },
})

const mainLogger = getLogger('MAIN')
const restLogger = getLogger('REST')
const socketIoLogger = getLogger('SOCKET.IO')

export { mainLogger, restLogger, socketIoLogger }
