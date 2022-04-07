import path from 'path';
import fs from 'fs';

import pool from '../../db';

;(async function() {
  const client = await pool.connect();

  const schemaSQL = fs.readFileSync(path.join(__dirname, '..', 'sql', 'fixtures.sql'), 'utf-8');

  const res = await client.query(schemaSQL);

  client.release();
  process.exit(0);

})();

