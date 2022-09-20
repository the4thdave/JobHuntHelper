import express, { Express } from 'express';
import morgan from 'morgan';
import jobRouter from './src/routes/jobRouter';

const app: Express = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/jobs', jobRouter);

app.use((req, res) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  /* eslint-disable-next-line no-console */
  console.log(`The server is running on port ${PORT}`),
);
