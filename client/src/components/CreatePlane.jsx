import React, { useState } from 'react';
import css from './CreatePlane.module.css';
import { useDispatch } from 'react-redux';
import { postPlane } from '../redux/planes/planesSlice.js';
import { useNavigate } from 'react-router-dom';

const CreatePlane = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [planeImage, setPlaneImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Формируем данные нового самолета
    const newPlane = {
      name,
      price: parseFloat(price),
      description,
      capacity: parseInt(capacity),
      planeImage,
    };

    // Диспетчерим экшн для создания самолета
    const action = await dispatch(postPlane(newPlane));

    // Проверяем, был ли запрос успешным
    if (action.type === 'POST_PLANE/fulfilled') {
      // Если самолет был успешно создан, переходим на домашнюю страницу
      navigate('/');
    }

    // После отправки данных можно очистить форму, если нужно
    setName('');
    setPrice('');
    setDescription('');
    setCapacity('');
    setPlaneImage('');
  };

  return (
    <div className={css.container}>
      <h1>Создать новый самолет</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Название:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Цена:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0" 
            step="0.01"  
          />
        </div>

        <div>
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="capacity">Вместимость:</label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
            min="1" 
            step="1"  
          />
        </div>

        <div>
          <label htmlFor="planeImage">Ссылка на изображение:</label>
          <input
            type="url"
            id="planeImage"
            value={planeImage}
            onChange={(e) => setPlaneImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Создать самолет</button>
      </form>
    </div>
  );
};

export default CreatePlane;
