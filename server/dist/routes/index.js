import { Router } from 'express';
import editorialRoutes from './editorial';
import playlistRoutes from './playlists';
import reviewRoutes from './reviews';
const router = Router();
router.use('/reviews', reviewRoutes);
router.use('/playlists', playlistRoutes);
router.use('/editorial', editorialRoutes);
export default router;
