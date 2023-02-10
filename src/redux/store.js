import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import loadingSlice from "./slices/loading"
import userSlice from "./slices/user"

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})