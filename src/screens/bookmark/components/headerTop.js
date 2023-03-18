import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from "📂common/color"

const HeaderTop = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>My Saved Movies</Text>
        </View>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
    },
    txtTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.white,
    }
})