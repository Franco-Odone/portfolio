import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: null,
};

export const proyectsFetch = createAsyncThunk(
  'proyects/proyectsFetch',
  async () => {
    //Acordarme de poner la url en el .env
    const response = await axios.get(`localhost:3001/proyects`);
    return response?.data;
  }
);

const proyectsSlice = createSlice({
  name: 'proyects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(proyectsFetch.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(proyectsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(proyectsFetch.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export default proyectsSlice.reducer;
