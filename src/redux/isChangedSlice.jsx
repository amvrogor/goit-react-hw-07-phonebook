import { createSlice } from '@reduxjs/toolkit';

const isChangedSlice = createSlice({
  name: 'isChanged',
  initialState: { id: '', value: false },
  reducers: {
    setIsChanged: {
      reducer(state, action) {
        state.id = action.payload.id;
        state.value = action.payload.value;
      },
      prepare(id, value) {
        return {
          payload: {
            id,
            value,
          },
        };
      },
    },
  },
});

export const { setIsChanged } = isChangedSlice.actions;
export const isChangedReducer = isChangedSlice.reducer;
