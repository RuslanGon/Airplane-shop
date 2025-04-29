import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlane } from '../redux/planes/planesSlice';

const EditPlane = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const plane = useSelector(state =>
    state.planes.items.find(plane => plane._id === id)
  );

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    capacity: '',
    planeImage: '',
  });

  useEffect(() => {
    if (plane) {
      setFormData({
        name: '',
        description: '',
        price: '',
        capacity: '',
        planeImage: '',
      });
    }
  }, [plane]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Удаляем пустые поля
    const updatedFields = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value.trim() !== '')
    );

    if (Object.keys(updatedFields).length === 0) {
      alert('Пожалуйста, измените хотя бы одно поле.');
      return;
    }

    dispatch(updatePlane({ id, updatedData: updatedFields }));
    navigate(`/planes/${id}`);
  };

  if (!plane) return <div>Загрузка...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Редактировать самолет</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <div>
          <label>Название:</label>
          <input
            type="text"
            name="name"
            placeholder={plane.name}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Описание:</label>
          <textarea
            name="description"
            placeholder={plane.description}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Цена (грн):</label>
          <input
            type="number"
            name="price"
            placeholder={plane.price}
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Вместимость (чел.):</label>
          <input
            type="number"
            name="capacity"
            placeholder={plane.capacity}
            value={formData.capacity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>URL изображения:</label>
          <input
            type="text"
            name="planeImage"
            placeholder={plane.planeImage}
            value={formData.planeImage}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#442d85', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default EditPlane;
