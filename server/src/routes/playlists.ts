import { Router } from 'express'
import { playlists } from '../data/mockData'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ data: playlists })
})

router.get('/:id', (req, res) => {
  const playlist = playlists.find((item) => item.id === req.params.id)

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist not found' })
  }

  return res.json({ data: playlist })
})

export default router
