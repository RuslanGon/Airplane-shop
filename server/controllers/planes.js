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
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ошибка при получении создании самолёта' });
    }
}  