import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '📂redux/slices/product'
import { selectProduct, selectLoading } from "📂redux/selector/product"
import Color from "📂common/color"
import FlatListCustom from '📂components/flatlist'
import ProductItemTrend from './itemTrend'
import ProductItemNew from './itemNew'

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(selectProduct);
    const loadingProduct = useSelector(selectLoading);
    const sizeToInterval = Dimensions.get('window').width

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    var productTrending = productList.filter(function (item) {
        return item.popular == "trending"
    });

    var productHotNew = productList.filter(function (item) {
        return item.popular == "hotnew"
    });

    return (
        <View style={styles.container}>
            {loadingProduct ?
                <Text style={styles.txtPopular}>Loading...</Text> :
                <View style={styles.productTrend}>
                    <Text style={styles.txtPopular}>Trending</Text>
                    <FlatListCustom
                        scrollIndicator={false}
                        data={productTrending}
                        keyExtractor={(item) => item._id}
                        horizontal
                        contentContainerStyle={styles.contentContainerStyle}
                        snapToInterval={sizeToInterval}
                        decelerationRate={0}
                        bounces={false}
                        renderItem={({ item }) => <ProductItemTrend item={item} />}
                    />
                </View>
            }
            <View style={styles.productHotNew}>
                <Text style={styles.txtPopular}>New 🚀</Text>
                <FlatListCustom
                    scrollIndicator={false}
                    data={productHotNew}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.contentContainerStyle}
                    snapToInterval={sizeToInterval}
                    decelerationRate={0}
                    bounces={false}
                    renderItem={({ item }) => <ProductItemNew item={item} />}
                />
            </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingBottom: 100,
    },
    productTrend: {
        flexDirection: 'column',
    },
    txtPopular: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Color.white,
        opacity: 0.8,
        marginHorizontal: 20,
    },
    contentContainerStyle: {
        marginHorizontal: 10,
    },
    productHotNew: {
        flexDirection: 'column',
        marginTop: 15
    },
})