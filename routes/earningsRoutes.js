import express from 'express'
const router = express.Router()

import {
    createEarning, 
    deleteEarning, 
    getAllEarnings, 
    updateEarning, 
    showStats
} from '../controllers/earningsController.js'

router.route('/').post(createEarning).get(getAllEarnings)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteEarning).patch(updateEarning)

export default router