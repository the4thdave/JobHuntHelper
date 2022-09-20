import express from 'express';
import pool from '../database/pool';

const router = express.Router();

router.get('/', async (req, res, next) => {
  pool.query('SELECT * FROM jobs ORDER BY id ASC', (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post('/', async (req, res, next) => {
  const { company, position, city, state, date } = req.body;

  pool.query(
    'INSERT INTO jobs (company, position, city, state, date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [company, position, city, state, date],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(`User added with ID: ${result.rows[0].id}`);
    },
  );
});

router.put('/:id', async (req, res, next) => {
  const { company, position, city, state, date } = req.body;
  const id = parseInt(req.params.id);

  pool.query(
    'UPDATE jobs SET company = $1, position = $2, city = $3, state = $4, date = $5 WHERE id = $6',
    [company, position, city, state, date, id],
    err => {
      if (err) {
        return next(err);
      }
      res.status(200).send(`User modified with ID: ${id}`);
    },
  );
});

router.delete('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM jobs WHERE id = $1', [id], err => {
    if (err) {
      return next(err);
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
});

export default router;
