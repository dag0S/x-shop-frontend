import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import auth from "./features/authSlice";
import devices from "./features/deviceSlice";
import types from "./features/typesSlice";
import brands from "./features/brandsSlice";
import { listenerMiddleware } from "./middleware/auth";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth,
    devices,
    types,
    brands
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
