import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlaneById, updatePlane } from '../redux/planes/planesSlice.js';
import css from './EditPlane.module.css'

const EditPlane = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { planeId } = useParams();

  const plane = useSelector(state => state.planes.plane);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    capacity: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (planeId) {
      dispatch(getPlaneById(planeId));
    }
  }, [dispatch, planeId]);

  useEffect(() => {
    if (plane) {
      setFormData({
        name: plane.name || '',
        price: plane.price || '',
        capacity: plane.capacity || '',
        description: plane.description || '',
      });
      setImagePreview(plane.planeImage || '');
    }
  }, [plane]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();

    updatedData.append('name', formData.name);
    updatedData.append('price', formData.price);
    updatedData.append('capacity', formData.capacity);
    updatedData.append('description', formData.description);
    if (imageFile) {
      updatedData.append('planeImage', imageFile);
    }

    dispatch(updatePlane({ id: planeId, updatedData }))
      .then(() => {
        // После успешного обновления данных, перенаправляем на главную страницу
        navigate('/');
      })
      .catch((error) => {
        // Обработка ошибок, если необходимо
        console.error(error);
      });
  };

  if (!plane) {
    return <div>Самолёт не найден</div>;
  }

  return (
    <div className={css.container}>
      <h2>Редактировать самолёт</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Название</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Цена</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="capacity">Вместимость</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Описание</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="planeImage">Изображение</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <div style={{ marginTop: '10px' }}>
              <img src={imagePreview} alt="Предпросмотр" width="200" />
            </div>
          )}
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default EditPlane;
