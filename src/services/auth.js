import { postDataAPI } from "📂utils/fetchData"
import AsyncStorage from "@react-native-async-storage/async-storage"

const login = async (data) => {
    const res = await postDataAPI('login', data)
    AsyncStorage.setItem("token", res.data.access_token)
    return res.data
}

const refreshToken = async () => {
    const res = await postDataAPI('refresh_token')
    return res.data
}

const register = async (data) => {
    const res = await postDataAPI('register', data)
    AsyncStorage.setItem("token", res.data.access_token)
    return res.data
}

const logout = async () => {
    const res = await postDataAPI('logout')
    AsyncStorage.removeItem("token")
    return res.data
}

const authService = {
    login,
    refreshToken,
    register,
    logout
}
export default authService;