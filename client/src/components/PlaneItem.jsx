import React from 'react';
import css from './Planes.module.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';  
import { useDispatch } from 'react-redux';
import { deletePlane } from '../redux/planes/planesSlice.js';

const PlaneItem = ({ plane }) => {
  const dispatch = useDispatch()

  const handleDlete = () => {
    dispatch(deletePlane(plane._id)); 
  };

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
      <button onClick={handleDlete} className={css.btn_delete}>
        <FaShoppingCart size={20} />
      </button>
    </div>
  );
};

export default PlaneItem;
