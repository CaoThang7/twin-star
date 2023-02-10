import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from '📂services/user'

const initialState = {
    user: null,
    msg: "msg"
}

export const getUserInfo = createAsyncThunk(
    "user/profile",
    async (id, authToken) => {
        try {
            const dataUser = await userService.getProfile(id, authToken)
            return {
                user: dataUser.user,
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
                state.msg = action.payload.msg
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.user = null
            })
    }
})

export default userSlice.reducer