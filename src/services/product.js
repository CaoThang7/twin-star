import { getDataAPI, patchDataAPI } from "📂utils/fetchData"

const getProduct = async () => {
    const res = await getDataAPI(`product/getAllProduct`)
    return res.data
}

const getProductId = async (id) => {
    const res = await getDataAPI(`product/${id}`)
    return res.data
}

const visitProduct = async (id) => {
    const res = await patchDataAPI(`product/visitCounter/${id}`)
    return res.data
}

const productService = {
    getProduct,
    getProductId,
    visitProduct
}
export default productService;