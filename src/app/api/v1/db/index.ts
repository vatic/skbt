import { Pool } from 'pg';
import config from '../../../../config';

export const pool = new Pool ({
    max: 20,
    connectionString: config.db.uri,
    idleTimeoutMillis: 30000
});


export const db = {
  query: (text: string, params: Array<any> = []) => pool.query(text, params),
};
