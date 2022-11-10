import { combineReducers } from '@reduxjs/toolkit';
import { meliApi } from '../api';
import { listItemReducer } from './listItem/listItemSlice';

export const rootReducer = {
  listItems: listItemReducer,
  [meliApi.reducerPath]: meliApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}

