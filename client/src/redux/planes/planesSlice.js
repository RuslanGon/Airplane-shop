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

const initialState = {
  planes: null,
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
        state.planes.push(action.payload);
        state.isError = false;
      })
      .addCase(postPlane.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message || 'Ошибка при создании самолета';
      });
  },
});

export default planesSlice.reducer;
