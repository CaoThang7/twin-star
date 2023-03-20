import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from '📂services/product'

const initialState = {
    data: [],
    loading: false,
    item: {},
    searchProduct: []
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

export const getProductSearchs = createAsyncThunk(
    "product/getProductSearchs",
    async (key) => {
        try {
            const dataProductSearch = await productService.getProductSearch(key)
            return {
                searchProduct: dataProductSearch
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
        clearDetails(state) {
            state.item = null
        },
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
            .addCase(getProductSearchs.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductSearchs.fulfilled, (state, action) => {
                state.searchProduct = action.payload.searchProduct
                state.loading = false
            })
            .addCase(getProductSearchs.rejected, (state) => {
                state.searchProduct = null
                state.loading = false
            })
    }
})

export const { clearDetails } = productSlice.actions

export default productSlice.reducer