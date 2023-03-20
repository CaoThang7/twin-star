import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import reviewService from '📂services/review'

const initialState = {
    data: [],
    dataUserId: [],
    loading: false,
    review: {},
    msg: ""
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

export const createReviewProduct = createAsyncThunk(
    "review/createReviewProduct",
    async ({ data, authToken }) => {
        try {
            const dataReview = await reviewService.createReview({ data, authToken })
            return {
                review: dataReview.data,
                msg: dataReview.msg
            }
        } catch (error) {
            return error.message
        }
    },
)

export const getReviewByUserId = createAsyncThunk(
    "review/getReviewByUserId",
    async ({ userId, authToken }) => {
        try {
            const dataReviewUser = await reviewService.getReviewUserId({ userId, authToken })
            return {
                dataUserId: dataReviewUser.reviews
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
        clearReviewUser(state) {
            state.data = []
        },
        clearMyReview(state) {
            state.dataUserId = []
        },
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
            .addCase(createReviewProduct.fulfilled, (state, action) => {
                state.review = action.payload.data
                state.msg = action.payload.msg
            })
            .addCase(createReviewProduct.rejected, (state) => {
                state.review = null
                state.msg = null
            })
            .addCase(getReviewByUserId.pending, (state) => {
                state.loading = true
            })
            .addCase(getReviewByUserId.fulfilled, (state, action) => {
                state.dataUserId = action.payload.dataUserId
                state.loading = false
            })
            .addCase(getReviewByUserId.rejected, (state) => {
                state.dataUserId = []
                state.loading = false
            })
    }
})

export const { clearReviewUser, clearMyReview } = reviewSlice.actions

export default reviewSlice.reducer