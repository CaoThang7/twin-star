import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"

const DataEmpty = () => {
    const urlImage = 'https://cdn-icons-png.flaticon.com/128/3172/3172555.png'
    return (
        <View style={styles.container}>
            <Text style={styles.txtEmpty}>you haven't saved any movies yet</Text>
            <Image
                source={{ uri: urlImage }}
                style={styles.imageEmpty}
            />
        </View>
    )
}

export default DataEmpty

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: Color.opacityBlack,
        justifyContent: 'center',
        alignItems: 'center',
        height: 420,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    txtEmpty: {
        color: Color.white,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageEmpty: {
        height: 140,
        width: 140,
        marginTop: 20
    }
})