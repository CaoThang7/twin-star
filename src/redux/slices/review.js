import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import reviewService from '📂services/review'

const initialState = {
    data: [],
    loading: false,
}

export const getReviewByProductId = createAsyncThunk(
    "product/getReviewByProductId",
    async (product_id) => {
        try {
            const dataReviewProduct = await reviewService.getReviewProductId(product_id)
            return {
                data: dataReviewProduct.reviews
            }
        } catch (error) {
            return error.message
        }
    },
)

export const reviewSlice = createSlice({
    name: "review",
    initialState, // gia tri ban dau
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getReviewByProductId.pending, (state) => {
                state.loading = true
            })
            .addCase(getReviewByProductId.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(getReviewByProductId.rejected, (state) => {
                state.data = []
                state.loading = false
            })
    }
})

export default reviewSlice.reducer