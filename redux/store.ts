import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth.slice'
import uiSlice from './ui.slice'
// ...

export const store = configureStore({
  reducer: {
    authDetails: authSlice,
    ui: uiSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
