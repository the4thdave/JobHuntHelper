import { Pool } from 'pg';

const pool = new Pool({
  user: 'user1',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

export default pool;
