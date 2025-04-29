import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import css from './PlaneDetails.module.css';

const PlaneDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plane, setPlane] = useState(null);

  useEffect(() => {
    const fetchPlane = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/planes/${id}`);
        const data = await response.json();
        setPlane(data);
      } catch (error) {
        console.error("Ошибка загрузки самолета:", error);
      }
    };

    fetchPlane();
  }, [id]);

  if (!plane) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={css.container}>
      <button className={css.backButton} onClick={() => navigate(-1)}>
        ⬅ Назад
      </button>
      <h2>{plane.name}</h2>
      <img src={plane.planeImage} alt={plane.name} />
      <p>{plane.description}</p>
      <p><strong>Цена:</strong> {plane.price} грн</p>
      <p><strong>Вместимость:</strong> {plane.capacity} человек</p>
    </div>
  );
};

export default PlaneDetails;
