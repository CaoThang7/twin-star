import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import Color from "📂common/color"
import { mainStack } from "📂common/navigator"
import { visitProducts } from '📂redux/slices/product'
import { useDispatch, useSelector } from "react-redux"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getReviewByUserId, clearMyReview } from '📂redux/slices/review'
import { selectReviewByUserId } from "📂redux/selector/review"
import { Rating } from 'react-native-stock-star-rating'

const MyReview = () => {
    const urlImgEmpty = "https://cdn-icons-png.flaticon.com/128/5058/5058446.png"
    const myReviewList = useSelector(selectReviewByUserId);
    const userAuth = useSelector(selectAuth);
    const authToken = useSelector(selectAuthToken);
    const userId = userAuth ? userAuth._id : "";
    const userReviewlength = myReviewList ? myReviewList.length : "";
    const userReviewList = myReviewList ? myReviewList : "";
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            dispatch(getReviewByUserId({ userId, authToken }))
            return () => {
                dispatch(clearMyReview())
            }
        }, [dispatch, userId]),
    );

    const gotoProductDetail = (item) => {
        const productId = item.product_id._id
        dispatch(visitProducts(productId))
        navigation.navigate(mainStack.productDetail, {
            productId: productId,
        })
    }

    return (
        <>
            {userReviewList == "" ? (
                <View style={styles.containerEmpty}>
                    <Image
                        source={{ uri: urlImgEmpty }}
                        style={styles.imgEmpty}
                    />
                </View>
            ) : (
                <View style={[styles.container, { justifyContent: userReviewlength == 1 || 2 ? 'flex-start' : 'center' }]}>
                    {userReviewList?.map((item, i) => (
                        <View key={item._id}>
                            <TouchableOpacity
                                onPress={() => gotoProductDetail(item)}
                                style={styles.backupItem}>
                                <Image
                                    source={{ uri: item.product_id.image }}
                                    style={styles.imgMark}
                                />
                                <View style={styles.boxName}>
                                    <View style={styles.itemStar}>
                                        <Rating stars={item.rating_value} maxStars={5} size={20} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </>
    )
}

export default MyReview

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    containerEmpty: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        paddingVertical: 5,
        alignItems: 'center'
    },
    backupItem: {
        width: 125,
        height: 150,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: 'pink',
    },
    imgMark: {
        width: '100%',
        height: '100%'
    },
    boxName: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    itemStar: {
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtName: {
        fontSize: 14,
        color: Color.yellow,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imgEmpty: {
        height: 100,
        width: 100,
        marginTop: 50
    },
})