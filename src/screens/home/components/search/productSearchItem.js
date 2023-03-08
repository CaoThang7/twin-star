import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import { useNavigation } from "@react-navigation/native"
import { mainStack } from "📂common/navigator"
import { useDispatch } from "react-redux"
import { visitProducts } from '📂redux/slices/product'

const ProductSearchItem = ({ item }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const gotoProductDetail = () => {
        dispatch(visitProducts(item._id))
        navigation.navigate(mainStack.productDetail, {
            productId: item._id,
        })
    }

    return (
        <TouchableOpacity onPress={gotoProductDetail}>
            <View style={styles.boxItemTrend}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.imageItem}
                />
                <View style={styles.txtItem}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <View style={styles.itemViewer}>
                        <Text
                            numberOfLines={1}
                            style={styles.txtViewer}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductSearchItem

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
        width: 100
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