import express, { json } from 'express';
import cors from 'cors';
import aiContentRoutes from './routes/aiContentRoutes';
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'https://travelcrow.vercel.app/'
  }));
app.use(json());
app.use('/api', aiContentRoutes);

export default app;