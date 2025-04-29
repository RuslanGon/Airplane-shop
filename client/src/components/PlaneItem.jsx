import React from 'react';
import css from './Planes.module.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';  

const PlaneItem = ({ plane }) => {
  return (
    <div className={css.planeCard}>
      <Link to={`/planes/${plane._id}`} className={css.link}>
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
      <button className={css.btn_delete}>
        <FaShoppingCart size={20} />
      </button>
    </div>
  );
};

export default PlaneItem;
