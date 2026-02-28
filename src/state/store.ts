import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import userReducer from "./slices/userSlice";
import learnReducer from "./slices/learnSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    learn: learnReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
