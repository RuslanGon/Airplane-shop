import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import planesService from '../../store/servicec/planesService.js'

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
try {
  return planesService.getPlanes()
} catch (error) {
  return thunkAPI.rejectWithValue(error.response.data)
}
})

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
