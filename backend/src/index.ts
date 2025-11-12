import path from 'node:path';
import express from 'express';
import moongose from 'mongoose';

import { router } from './router';

moongose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    // Middlewares
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));


