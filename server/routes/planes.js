import express from 'express'
import { createPlane, getPlanes } from '../controllers/planes.js'

const router = express.Router()
// Получение всех самолетов
router.get('/', getPlanes )

// Выбор одного самолета по id
router.get('/:id', async (req, res) => {
    res.send('Get singl plane')
})
// Создание оного самолета
router.post('/', createPlane)




export default router