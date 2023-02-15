import { getDataAPI, patchDataAPI } from "📂utils/fetchData"

const getProfile = async ({ id, authToken }) => {
    const res = await getDataAPI(`user/${id}`, authToken)
    return res.data
}

const updateProfile = async ({ data, authToken }) => {
    const res = await patchDataAPI(`user/update`, data, authToken)
    return res.data
}

const userService = {
    getProfile,
    updateProfile
}
export default userService;