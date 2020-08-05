import { configureStore } from '@reduxjs/toolkit';

let counterReducer = 1;

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
