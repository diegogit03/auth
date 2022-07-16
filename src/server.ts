import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';

config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/', (_, res) => res.send('test'));

app.listen(process.env.PORT, () => console.log('Server listening at PORT ' + process.env.PORT));
