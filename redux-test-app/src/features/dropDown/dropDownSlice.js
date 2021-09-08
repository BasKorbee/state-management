import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'This is a drop-down',
  status: 'idle',
};

export const dropDownSlice = createSlice({
  name: 'dropDown',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { update } = dropDownSlice.actions;

export const selectDropDown = (state) => state.dropDown.value;

export default dropDownSlice.reducer;
