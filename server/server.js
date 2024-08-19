import express from 'express';
import cors from 'cors';  // Import the cors package
import router from './routes/aiContentRoutes.js';  // Ensure the correct import path

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

// Use your routes
app.use('/', router);
// app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
