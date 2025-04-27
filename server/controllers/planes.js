import PlaneModel from '../models/plane.js'

export const getPlanes = async (req, res) => {
    try {
      const planes = await PlaneModel.find();
      res.status(200).json(planes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при получении данных о самолётах' });
    }
  };

  export const createPlane = async (req, res) => {
    try {
      const { name, price, description, capacity, planeImage } = req.body;
  
      if (!name || !price || !description || !capacity) {
        return res.status(400).json({ error: 'Все поля обязательны' });
      }
  
      const imageUrl = req.file
        ? `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        : planeImage
          ? (planeImage.startsWith('http')
              ? planeImage
              : `http://localhost:${process.env.PORT}/static/${planeImage}`)
          : null;
  
      const plane = await PlaneModel.create({
        name,
        price,
        description,
        capacity,
        planeImage: imageUrl,
      });
  
      res.status(201).json(plane);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при создании самолёта' });
    }
  };
  