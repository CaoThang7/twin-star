import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import loadingSlice from "./slices/loading"

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})