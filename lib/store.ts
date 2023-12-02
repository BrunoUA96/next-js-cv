import { configureStore } from '@reduxjs/toolkit';
import animation from './features/animation/animationSlice';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    animation,
  },
});

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
