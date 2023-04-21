import express, {Application, Request, Response } from 'express';
import dotenv from 'dotenv'

const app: Application = express();
dotenv.config()

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World amplify sdfsdfsdfs nt!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});