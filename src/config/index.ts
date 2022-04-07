import { config } from 'dotenv';

config()

const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_TEST_NAME
} = process.env

export default {
  app: {
    port: Number(PORT),
  },
  db: {
    uri: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    testUri: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_TEST_NAME}`,
  },
}
