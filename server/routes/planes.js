import express from 'express'
import multer from 'multer'
import { createPlane, getPlaneById, getPlanes } from '../controllers/planes.js'
import path from 'path'

const router = express.Router()

// Показываем где хроняться картинки
const storage = multer.diskStorage({
    destination: './assets',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

// Получение всех самолетов
router.get('/', getPlanes )

// Выбор одного самолета по id
router.get('/:id', getPlaneById)
// Создание оного самолета
router.post('/', upload.single('planeImage'), createPlane)



export default router