import { configureStore } from "@reduxjs/toolkit";

import MovieSlices from "./Slices/MovieSlices";

const store = configureStore({
  reducer: {
    MovieStore: MovieSlices,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
