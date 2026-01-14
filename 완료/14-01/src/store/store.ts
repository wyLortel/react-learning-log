import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    //카운터라는 의미로 카운터 슬라이스를 제공 받겟다
    counter: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
