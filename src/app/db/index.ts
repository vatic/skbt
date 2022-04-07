import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    connectionString: 'postgres://postgres:root@localhost:5432/skbt-dev',
    idleTimeoutMillis: 30000
});

export default pool;
