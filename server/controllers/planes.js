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
  
      const plane = await PlaneModel.create({
        name, price, description, capacity, planeImage,
      });
      res.status(201).json(plane);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при создании самолёта' });
    }
  };
  