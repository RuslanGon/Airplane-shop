import React, { useState } from 'react';
import css from './CreatePlane.module.css';

const CreatePlane = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [planeImage, setPlaneImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlane = {
      name,
      price: parseFloat(price),
      description,
      capacity: parseInt(capacity),
      planeImage,
    };

    console.log('New plane data: ', newPlane);
    // Здесь можно отправить newPlane в сервер через API
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
