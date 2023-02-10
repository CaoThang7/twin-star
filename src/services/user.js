import { getDataAPI, patchDataAPI } from "📂utils/fetchData"

const getProfile = async (id, authToken) => {
    const res = await getDataAPI(`user/${id}`, authToken)
    return res.data
}

const userService = {
    getProfile
}
export default userService;