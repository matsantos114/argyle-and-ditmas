import { Router } from 'express';
import { editorialNotes } from '../data/mockData';
const router = Router();
router.get('/', (_req, res) => {
    res.json({ data: editorialNotes });
});
export default router;
