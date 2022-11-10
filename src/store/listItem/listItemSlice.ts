import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListItem {
  value: any
  isLoading:boolean,
  isError:boolean,
}

const initialState: ListItem = {
  value: {},
  isLoading: false,
  isError: false,
};

export const ListItemSlice = createSlice({
  name: 'listItem',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<any>) {
      state.value = action.payload,
      state.isLoading = false,
      state.isError = false;
    },
    setError(state, action: PayloadAction<any>) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setItems, setError, setLoading } = ListItemSlice.actions;

export const listItemReducer = ListItemSlice.reducer;
