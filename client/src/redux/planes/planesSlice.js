import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import planesService from '../../store/servicec/planesService.js'
import axios from 'axios';

// export const getPlanes = createAsyncThunk("GET_PLANES", async (_, thunkAPI) => {
//   try {
//     return planesService.getPlanes();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

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

const initialState = {
  planes: null,
  isError: false,
  isLoading: false,
  message: ''
};

const planesSlice = createSlice({
  name: 'planes',
  initialState,
  reducers: {
   
  },
});

export default planesSlice.reducer;
