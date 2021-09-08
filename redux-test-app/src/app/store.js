import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice';
import dropDownReducer from '../features/dropDown/dropDownSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    dropDown: dropDownReducer,
  },
});
