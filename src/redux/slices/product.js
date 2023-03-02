import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from '📂services/product'

const initialState = {
    data: [],
    loading: false
}

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async () => {
        try {
            const dataProduct = await productService.getProduct()
            return {
                data: dataProduct.productList
            }
        } catch (error) {
            return error.message
        }
    },
)

export const productSlice = createSlice({
    name: "product",
    initialState, // gia tri ban dau
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(getProduct.rejected, (state) => {
                state.data = null
                state.loading = false
            })
    }
})

export default productSlice.reducer