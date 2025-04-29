import React from 'react';
import css from './Planes.module.css';
import { Link } from 'react-router-dom';

const PlaneItem = ({ plane }) => {
  return (
    <Link to={`/planes/${plane._id}`}  className={css.planeCard}>
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
    </Link>
  );
};

export default PlaneItem;
