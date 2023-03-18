import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import { Swipeable } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native"
import { mainStack } from "📂common/navigator"
import { useDispatch } from "react-redux"
import { visitProducts } from '📂redux/slices/product'

const UserMarkItem = ({ item, rightSwipe }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const gotoProductDetail = () => {
        dispatch(visitProducts(item.product_id._id))
        navigation.navigate(mainStack.productDetail, {
            productId: item.product_id._id,
        })
    }

    return (
        <TouchableOpacity onPress={gotoProductDetail}>
            <Swipeable renderRightActions={rightSwipe}>
                <View style={styles.boxItemTrend}>
                    <Image
                        source={{ uri: item.product_id.image }}
                        style={styles.imageItem}
                    />
                    <View style={styles.txtItem}>
                        <Text style={styles.txtName}>{item.product_id.name}</Text>
                        <Text style={styles.txtTitle}>{item.product_id.title}</Text>
                        <View style={styles.itemViewer}>
                            <Text
                                numberOfLines={1}
                                style={styles.txtViewer}>
                                {item.product_id.description}
                            </Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </TouchableOpacity>
    )
}

export default UserMarkItem

const styles = StyleSheet.create({
    boxItemTrend: {
        height: 100,
        marginTop: 5,
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        flexDirection: 'row'
    },
    imageItem: {
        height: '100%',
        width: 100,
        borderRadius: 10,
    },
    itemViewer: {
        width: 150,
    },
    txtItem: {
        justifyContent: 'center',
        paddingLeft: 10,
    },
    txtName: {
        fontSize: 20,
        color: Color.white,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    txtTitle: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.8,
        marginBottom: 5,
    },
    txtViewer: {
        fontSize: 14,
        color: Color.white,
        opacity: 0.8,
        marginLeft: 2
    }
})