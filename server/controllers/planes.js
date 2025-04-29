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
    const error = {};
  
    try {
      const { name, price, description, capacity, planeImage } = req.body;
  
      if (!name) error.name = 'Поле "name" обязательно для заполнения';
      if (!price) error.price = 'Поле "price" обязательно для заполнения';
      if (!description) error.description = 'Поле "description" обязательно для заполнения';
      if (!capacity) error.capacity = 'Поле "capacity" обязательно для заполнения';
      if (!planeImage && !req.file) error.planeImage = 'Поле "planeImage" обязательно для заполнения';
  
      if (Object.keys(error).length > 0) {
        return res.status(400).json({ error });
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

  export const getPlaneById = async (req, res) => {
    const { id } = req.params;
    try {
      const plane = await PlaneModel.findById(id);
      if (!plane) {
        return res.status(404).json({ error: 'Самолёт не найден' });
      }
      res.status(200).json(plane);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при получении данных о самолёте' });
    }
  };

  export const deletePlaneById = async (req, res) => {
    const { id } = req.params;
    try {
      const plane = await PlaneModel.findByIdAndDelete(id);
      if (!plane) {
        return res.status(404).json({ error: 'Самолёт не найден' });
      }
      res.status(200).json({ message: 'Самолёт успешно удалён' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при удалении самолёта' });
    }
  };


  export const patchPlane = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, capacity, planeImage } = req.body; 
  
    try {
      const updateData = {};
  
      if (name) updateData.name = name;
      if (price) updateData.price = price;
      if (description) updateData.description = description;
      if (capacity) updateData.capacity = capacity;
      if (planeImage) updateData.planeImage = planeImage;
  
      const plane = await PlaneModel.findByIdAndUpdate(
        id,
        { $set: updateData }, 
        { new: true } 
      );
  
      if (!plane) {
        return res.status(404).json({ error: 'Самолет не найден' });
      }
  
      res.status(200).json(plane);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при обновлении самолета' });
    }
  };
  


  