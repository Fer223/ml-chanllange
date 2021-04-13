import { resultsReducer } from './reducers/resultsReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({reducer: resultsReducer});
