import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Color from "📂common/color"
import HeaderBar from './components/productDetail/headerBar'
import LinearGradient from 'react-native-linear-gradient';
import BodyProductDetail from './components/productDetail/body'
import VideoSection from './components/productDetail/videoSection'
import { selectAuth } from "📂redux/selector/auth"
import { useRoute } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { selectProductId } from "📂redux/selector/product"
import { ScrollView } from 'react-native-virtualized-view'
import { getReviewByProductId, clearReviewUser } from '📂redux/slices/review'
import { selectReviewProduct } from "📂redux/selector/review"
import { getProductDetails, clearDetails } from '📂redux/slices/product'

const ProductDetail = () => {
    const route = useRoute()
    const { productId } = route.params
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const productDetail = useSelector(selectProductId);
    const reviewProductId = useSelector(selectReviewProduct)
    const userAuth = useSelector(selectAuth);

    useEffect(() => {
        dispatch(getProductDetails(productId))
        dispatch(getReviewByProductId(productId))
        return () => {
            dispatch(clearDetails())
            dispatch(clearReviewUser())
        }
    }, [dispatch, productId])

    return (
        <LinearGradient colors={Color.premiumDark} style={styles.container}>
            <ScrollView>
                <HeaderBar navigation={navigation} />
                <VideoSection productDetail={productDetail} />
                <BodyProductDetail
                    productDetail={productDetail}
                    reviewProductId={reviewProductId}
                    userAuth={userAuth}
                    navigation={navigation}
                />
            </ScrollView>
        </LinearGradient>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})