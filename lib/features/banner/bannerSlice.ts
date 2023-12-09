import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BannerState = {
  sectionNumber: number;
  topPosition: number;
  parrentWidth: number;
};

const initialState = {
  sectionNumber: 1,
  topPosition: 0,
  parrentWidth: 0,
} as BannerState;

export const bannerPosition = createSlice({
  name: 'bannerPosition',
  initialState,
  reducers: {
    onChangeSection: (state, action: PayloadAction<number>) => {
      state.sectionNumber = action.payload;
    },
    onScrollChange: (state, action: PayloadAction<number[]>) => {
      state.topPosition = action.payload[0];
      state.parrentWidth = action.payload[1];
    },
  },
});

export const { onChangeSection, onScrollChange } = bannerPosition.actions;

export default bannerPosition.reducer;
