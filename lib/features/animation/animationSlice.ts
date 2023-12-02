import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AnimationState = {
  navbarIsAnimated: boolean;
};

const initialState = {
  navbarIsAnimated: false,
} as AnimationState;

export const animation = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    onNavbarAnimated: (state, action: PayloadAction<boolean>) => {
      state.navbarIsAnimated = action.payload;
    },
    // reset: () => initialState,
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // decrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value -= action.payload;
    // },
  },
});

export const {
  onNavbarAnimated,
  //   increment,
  //   incrementByAmount,
  //   decrement,
  //   decrementByAmount,
  //   reset,
} = animation.actions;

export default animation.reducer;
