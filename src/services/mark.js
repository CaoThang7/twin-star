import { getDataAPI, postDataAPI, deleteDataAPI } from "📂utils/fetchData"

const createMark = async ({ data, authToken }) => {
    const res = await postDataAPI(`mark/createMark`, data, authToken)
    return res.data
}

const getMarkUserId = async ({ userId, authToken }) => {
    const res = await getDataAPI(`mark/getMarkUserId/${userId}`, authToken)
    return res.data
}

const deleteMarkId = async ({ id, authToken }) => {
    const res = await deleteDataAPI(`mark/deleteMark/${id}`, authToken)
    return res.data
}

const markService = {
    createMark,
    getMarkUserId,
    deleteMarkId
}
export default markService;