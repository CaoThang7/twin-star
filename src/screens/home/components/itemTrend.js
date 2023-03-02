import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from "📂common/color"

const ProductItemTrend = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.boxItemTrend}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.imageItem}
                />
                <Text style={styles.txtName}>{item.name}</Text>
                <Text style={styles.txtTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItemTrend

const styles = StyleSheet.create({
    boxItemTrend: {
        marginTop: 15,
        marginHorizontal: 10,
        padding: 5,
        backgroundColor: Color.white,
        borderRadius: 25,
        width: 200,
    },
    imageItem: {
        height: 220,
        width: '100%',
        borderRadius: 25,
    },
    txtName: {
        fontSize: 20,
        color: Color.black,
        fontWeight: 'bold',
        marginLeft: 5
    },
    txtTitle: {
        fontSize: 16,
        color: Color.black,
        marginLeft: 5,
        opacity: 0.8,
        marginBottom: 5
    }
})