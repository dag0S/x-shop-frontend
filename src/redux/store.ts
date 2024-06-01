import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import auth from "./features/authSlice";
import devices from "./features/deviceSlice";
import { listenerMiddleware } from "./middleware/auth";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth,
    devices,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
