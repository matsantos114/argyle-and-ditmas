import { Router } from 'express'
import { featuredReview, reviews } from '../data/mockData'

const router = Router()

router.get('/', (_req, res) => {
  res.json({
    data: reviews
  })
})

router.get('/featured', (_req, res) => {
  res.json({
    data: featuredReview
  })
})

router.get('/:id', (req, res) => {
  const review = reviews.find((item) => item.id === req.params.id)

  if (!review) {
    return res.status(404).json({ error: 'Review not found' })
  }

  return res.json({ data: review })
})

export default router
