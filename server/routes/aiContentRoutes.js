import { Router } from 'express';
import { getAIContent } from '../controllers/aiContentController.js'; // Ensure .js is present

const router = Router();

router.get('/ai-content/:destination', getAIContent);

export default router;
