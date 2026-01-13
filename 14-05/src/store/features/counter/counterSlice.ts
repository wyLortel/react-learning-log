import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ num1: number; num2: number }>,
    ) => {
      state.count += action.payload.num1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('increment pending');
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.count += action.payload;
        },
      );
  },
});

export const incrementAsync = createAsyncThunk(
  'createSlice/incrementAsync',
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
