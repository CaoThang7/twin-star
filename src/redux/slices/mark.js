import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import markService from '📂services/mark'

const initialState = {
    data: [],
    loading: false,
    mark: {},
    msg: ""
}

export const createMarkProduct = createAsyncThunk(
    "review/createMarkProduct",
    async ({ data, authToken }) => {
        try {
            const dataMarkProduct = await markService.createMark({ data, authToken })
            return {
                mark: dataMarkProduct.data,
                msg: dataMarkProduct.msg
            }
        } catch (error) {
            return error.message
        }
    },
)

export const getMarkByUserId = createAsyncThunk(
    "review/getMarkByUserId",
    async ({ userId, authToken }) => {
        try {
            const dataMark = await markService.getMarkUserId({ userId, authToken })
            return {
                data: dataMark.marks,
            }
        } catch (error) {
            return error.message
        }
    },
)

export const deleteMarkById = createAsyncThunk(
    "review/deleteMarkById",
    async ({ id, authToken }) => {
        try {
            const deleteMark = await markService.deleteMarkId({ id, authToken })
            return {
                id: id,
                msg: deleteMark.msg
            }
        } catch (error) {
            return error.message
        }
    },
)

export const markSlice = createSlice({
    name: "mark",
    initialState, // gia tri ban dau
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(createMarkProduct.fulfilled, (state, action) => {
                state.mark = action.payload.data
                state.msg = action.payload.msg
            })
            .addCase(createMarkProduct.rejected, (state) => {
                state.mark = null
                state.msg = null
            })
            .addCase(getMarkByUserId.fulfilled, (state, action) => {
                state.data = action.payload.data
            })
            .addCase(getMarkByUserId.rejected, (state) => {
                state.data = []
            })
            .addCase(deleteMarkById.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (item) => item._id !== action.payload.id,
                )
            })
    }
})

export default markSlice.reducer