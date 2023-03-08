import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListCustom from '📂components/flatlist'
import ProductSearchItem from './productSearchItem'

const ProductSearch = ({ productList }) => {
    return (
        <View style={styles.container}>
            {
                productList.products == ""
                    ? <Text style={styles.txtNoData}>Movie not found</Text>
                    : <FlatListCustom
                        scrollIndicator={false}
                        data={productList.products}
                        keyExtractor={(item) => item._id}
                        contentContainerStyle={styles.contentContainerStyle}
                        decelerationRate={0}
                        bounces={false}
                        renderItem={({ item }) => <ProductSearchItem item={item} />}
                    />
            }
        </View>
    )
}

export default ProductSearch

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingBottom: 15,
        marginHorizontal: 15
    },
    contentContainerStyle: {
        marginHorizontal: 0,
    },
    txtNoData: {
        textAlign: 'center',
    }
})