import { Router } from 'express';
import { getAIContent } from '../controllers/aiContentController.js'; // Ensure .js is present

const router = Router();

router.get('/api/ai-content/:destination', getAIContent);
router.get('/api/tour-packages/:destination', getAIContent);

export default router;
