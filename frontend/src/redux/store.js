import { resultsReducer } from './reducers/resultsReducer';
import { detailsReducer } from './reducers/detailsReducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ results: resultsReducer, details: detailsReducer });

export const store = configureStore({reducer: rootReducer});
