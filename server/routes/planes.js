import express from 'express';
import multer from 'multer';
import { createPlane, deletePlaneById, getPlaneById, getPlanes, patchPlane } from '../controllers/planes.js';
import path from 'path';

const router = express.Router();

// Конфигурация для хранения файлов с использованием multer
const storage = multer.diskStorage({
  destination: './assets', // Папка для хранения изображений
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Форматирование имени файла
  },
});

const upload = multer({ storage }); // Создание загрузчика с заданной конфигурацией

// Получение всех самолетов
router.get('/', getPlanes);

// Получение одного самолета по id
router.get('/:id', getPlaneById);

// Создание нового самолета с изображением
router.post('/', upload.single('planeImage'), createPlane);

// Удаление самолета по id
router.delete('/:id', deletePlaneById);

// Обновление самолета (включая изображение) по id
router.patch('/:id/edit', upload.single('planeImage'), patchPlane); // Добавлен upload.single для обработки изображения

export default router;
