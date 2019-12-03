import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import authRouter from './routes/auth';
import storeRouter from './routes/store';
import secretRouter from './routes/secret';
import './models/index';

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')))
// app.use(express.static(path.join(__dirname, './build')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(bodyParser.text())
  .use(bodyParser.json())
  .use('/auth', authRouter)
  .use('/secret', secretRouter)
  .use('/', storeRouter);


app.use((req, res) => {
  // res.sendFile(path.join(__dirname + '/build/error.html'));
  res.status(404).json({
    err: '404',
    message: '404 - Not found',
  });
});

app.use((err, req, res) => {
  res.status(500).json({
    err: '500',
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
