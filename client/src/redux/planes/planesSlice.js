import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Получение всех самолетов
export const getPlanes = createAsyncThunk(
  "GET_PLANES",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/api/planes');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Добавление нового самолета
export const postPlane = createAsyncThunk(
  "POST_PLANE",
  async (newPlaneData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/planes', newPlaneData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Удаление самолета
export const deletePlane = createAsyncThunk(
  "DELETE_PLANE",
  async (planeId, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/api/planes/${planeId}`);
      return planeId; // Возвращаем ID удаленного самолета
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Обновление самолета
export const updatePlane = createAsyncThunk(
  'planes/updatePlane',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/planes/${id}/edit`, // Обновленный URL с '/edit'
        updatedData, // Здесь передаем FormData
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Получение одного самолета по ID
export const getPlaneById = createAsyncThunk(
  'planes/getPlaneById',
  async (planeId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/planes/${planeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || { message: 'Ошибка при получении самолета' });
    }
  }
);

const initialState = {
  planes: [],  // Начальное значение пустой массив
  plane: null,
  isError: false,
  isLoading: false,
  message: ''
};

const planesSlice = createSlice({
  name: 'planes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlanes.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(getPlanes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = action.payload;
        state.isError = false;
      })
      .addCase(getPlanes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || 'Что-то пошло не так';
      })

      .addCase(postPlane.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(postPlane.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes.push(action.payload); // Добавляем новый самолет в массив
        state.isError = false;
      })
      .addCase(postPlane.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || 'Ошибка при создании самолета';
      })

      .addCase(deletePlane.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(deletePlane.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = state.planes.filter(plane => plane._id !== action.payload);
        state.isError = false;
      })
      .addCase(deletePlane.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || 'Ошибка при удалении самолета';
      })
      
      .addCase(updatePlane.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(updatePlane.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.planes.findIndex(plane => plane._id === action.payload._id);
        if (index !== -1) {
          state.planes[index] = action.payload;
        }
        state.isError = false;
      })
      .addCase(updatePlane.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Ошибка при обновлении самолета';
      })

      .addCase(getPlaneById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
        state.plane = null;
      })
      .addCase(getPlaneById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload;
        state.isError = false;
      })
      .addCase(getPlaneById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Ошибка при получении самолета';
      })
  },
});

export default planesSlice.reducer;
