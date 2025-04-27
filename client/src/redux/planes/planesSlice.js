
import { createSlice } from '@reduxjs/toolkit';

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
