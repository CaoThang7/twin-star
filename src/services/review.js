import { getDataAPI } from "📂utils/fetchData"

const getReviewProductId = async (product_id) => {
    const res = await getDataAPI(`review/getReviewProductId/${product_id}`)
    return res.data
}

const reviewService = {
    getReviewProductId
}
export default reviewService;