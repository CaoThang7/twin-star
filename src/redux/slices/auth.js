import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from '📂services/auth'

const initialState = {
    user: null,
    token: null,
    msg: "msg"
}

export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
        try {
            const dataUser = await authService.login(data)
            return {
                user: dataUser.user,
                token: dataUser.access_token,
                msg: dataUser.msg
            }
        } catch (error) {
            return { msg: error.response.data.msg }
        }
    },
)

export const refresh_token = createAsyncThunk(
    "auth/refresh_token",
    async () => {
        try {
            const dataUser = await authService.refreshToken()
            return {
                user: dataUser.user,
                token: dataUser.access_token,
                msg: dataUser.msg
            }
        } catch (error) {
            return { msg: error.response.data.msg }
        }
    },
)

export const register = createAsyncThunk(
    "auth/register",
    async (data) => {
        try {
            const dataUser = await authService.register(data)
            return {
                user: dataUser.user,
                token: dataUser.access_token,
                msg: dataUser.msg
            }
        } catch (error) {
            return { msg: error.response.data.msg }
        }
    },
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            const dataUser = await authService.logout()
            return dataUser
        } catch (error) {
            return { msg: error.response.data.msg }
        }
    },
)

export const authSlice = createSlice({
    name: "auth",
    initialState, // gia tri ban dau
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.msg = action.payload.msg
            })
            .addCase(login.rejected, (state) => {
                state.user = null
                state.token = null
            })
            .addCase(refresh_token.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.msg = action.payload.msg
            })
            .addCase(refresh_token.rejected, (state) => {
                state.user = null
                state.token = null
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.msg = action.payload.msg
            })
            .addCase(register.rejected, (state) => {
                state.user = null
                state.token = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.token = null
            })
            .addCase(logout.rejected, (state) => {
                state.user = null
                state.token = null
            })
    }
})

export default authSlice.reducer