import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {                              //these will be called by redux and recive the current state
    increment(state) {
      state.counter++;
    },
    decrement(state) {                   //underneath it is not manipulating the state
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;    //action.payload ** default by redux toolKit
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;