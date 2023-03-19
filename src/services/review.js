import { getDataAPI, postDataAPI } from "📂utils/fetchData"

const getReviewProductId = async (product_id) => {
    const res = await getDataAPI(`review/getReviewProductId/${product_id}`)
    return res.data
}

const getReviewUserId = async ({ userId, authToken }) => {
    const res = await getDataAPI(`review/getReviewUserId/${userId}`, authToken)
    return res.data
}

const createReview = async ({ data, authToken }) => {
    const res = await postDataAPI(`review/createReview`, data, authToken)
    return res.data
}

const reviewService = {
    getReviewProductId,
    getReviewUserId,
    createReview
}
export default reviewService;