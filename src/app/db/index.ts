import { Pool } from 'pg';
import config from '../../config';

const pool = new Pool ({
    max: 20,
    connectionString: config.db.uri,
    idleTimeoutMillis: 30000
});

export default pool;
