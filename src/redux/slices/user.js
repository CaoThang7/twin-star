import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from '📂services/user'

const initialState = {
    user: [],
    msg: "msg"
}

export const getUserInfo = createAsyncThunk(
    "user/profile",
    async ({ id, authToken }) => {
        try {
            const dataUser = await userService.getProfile({ id, authToken })
            return {
                user: dataUser.user,
            }
        } catch (error) {
            return { msg: error }
        }
    },
)

export const updateProfile = createAsyncThunk(
    "user/updateProfile",
    async ({ data, authToken }) => {
        try {
            const dataUser = await userService.updateProfile({ data, authToken })
            return {
                msg: dataUser.msg
            }
        } catch (error) {
            return { msg: error.response.data.msg }
        }
    },
)

export const userSlice = createSlice({
    name: "user",
    initialState, // gia tri ban dau
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.user = action.payload.user
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.user = []
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.msg = action.payload.msg
            })
            .addCase(updateProfile.rejected, (state) => {
                state.msg = null
            })
    }
})

export default userSlice.reducer