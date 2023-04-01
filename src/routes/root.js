import {Router} from 'express'

import logger from '../utilities/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside the root path')
  const title = process.env.TITLE || 'Server'
  res.send({ msg: title })
})

export default router