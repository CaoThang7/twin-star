import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from '📂services/product'

const initialState = {
    data: [],
    loading: false,
    item: {},
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

export const getProductDetails = createAsyncThunk(
    "product/getProductDetails",
    async (id) => {
        try {
            const dataProductId = await productService.getProductId(id)
            return {
                item: dataProductId
            }
        } catch (error) {
            return error.message
        }
    },
)

export const visitProducts = createAsyncThunk(
    "product/visitProducts",
    async (id) => {
        try {
            const data = await productService.visitProduct(id)
            return {
                item: data
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
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.item = action.payload.item
                state.loading = false
            })
            .addCase(getProductDetails.rejected, (state) => {
                state.item = null
                state.loading = false
            })
            .addCase(visitProducts.fulfilled, (state, action) => {
                state.item = action.payload.item
                state.loading = false
            })
            .addCase(visitProducts.rejected, (state) => {
                state.item = null
                state.loading = false
            })
    }
})

export default productSlice.reducer