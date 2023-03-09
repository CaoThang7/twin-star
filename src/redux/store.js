import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/auth"
import loadingSlice from "./slices/loading"
import userSlice from "./slices/user"
import productSlice from "./slices/product"
import reviewSlice from "./slices/review"

export default configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        user: userSlice,
        product: productSlice,
        review: reviewSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})