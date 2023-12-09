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
