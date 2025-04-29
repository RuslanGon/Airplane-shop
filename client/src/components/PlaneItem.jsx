import React from 'react';
import css from './Planes.module.css';

const PlaneItem = ({ plane }) => {
  return (
    <div className={css.planeCard}>
      <img
        src={plane.planeImage}
        alt={plane.name}
        className={css.planeImage}
      />
      <h3>{plane.name}</h3>
      <p>{plane.description}</p>
      <p>
        <strong>Цена:</strong> {plane.price} грн.
      </p>
      <p>
        <strong>Вместимость:</strong> {plane.capacity} человек
      </p>
    </div>
  );
};

export default PlaneItem;
