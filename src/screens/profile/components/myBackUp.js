import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import Color from "📂common/color"
import { mainStack } from "📂common/navigator"
import { getMarkByUserId } from '📂redux/slices/mark'
import { visitProducts } from '📂redux/slices/product'
import { useDispatch, useSelector } from "react-redux"
import { selectMarkByUserId } from "📂redux/selector/mark"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const MyBackUp = () => {
    const urlImgEmpty = "https://cdn-icons-png.flaticon.com/128/5058/5058446.png"
    const myMarkList = useSelector(selectMarkByUserId);
    const userAuth = useSelector(selectAuth);
    const authToken = useSelector(selectAuthToken);
    const userId = userAuth ? userAuth._id : "";
    const userMarklength = myMarkList ? myMarkList.length : "";
    const userMarkList = myMarkList ? myMarkList : "";
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            dispatch(getMarkByUserId({ userId, authToken }))
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
            {userMarkList == "" ? (
                <View style={styles.containerEmpty}>
                    <Image
                        source={{ uri: urlImgEmpty }}
                        style={styles.imgEmpty}
                    />
                </View>
            ) : (
                <View style={[styles.container, { justifyContent: userMarklength == 1 || 2 ? 'flex-start' : 'center' }]}>
                    {userMarkList.map((item, i) => (
                        <View key={item._id}>
                            <TouchableOpacity
                                onPress={() => gotoProductDetail(item)}
                                style={styles.backupItem}>
                                <Image
                                    source={{ uri: item.product_id.image }}
                                    style={styles.imgMark}
                                />
                                <View style={styles.boxName}>
                                    <View style={styles.itemName}>
                                        <Text style={styles.txtName}>{item.product_id.name}</Text>
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

export default MyBackUp

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
    itemName: {
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        height: 40,
        width: '100%',
        justifyContent: 'center'
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
    }
})