import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import startServer from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use('/static', express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => {
  res.send("hello wordaaa");
});

startServer(app);
