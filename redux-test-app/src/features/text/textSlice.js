import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Ola',
  status: 'idle',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { update } = textSlice.actions;

export const selectText = (state) => state.text.value;

export default textSlice.reducer;