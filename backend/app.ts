import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port: String = process.env.PORT || '9090';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Exploding Kitten Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});