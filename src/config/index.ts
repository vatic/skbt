import { config } from 'dotenv';

config()

const {
  PORT,
  PG_URI,
  PG_TEST_URI,
} = process.env

export default {
  app: {
    port: Number(PORT),
  },
  pg: {
    uri: PG_URI,
    testUri: PG_TEST_URI,
  },
}
