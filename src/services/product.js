import { getDataAPI } from "📂utils/fetchData"

const getProduct = async () => {
    const res = await getDataAPI(`product/getAllProduct`)
    return res.data
}

const productService = {
    getProduct,
}
export default productService;