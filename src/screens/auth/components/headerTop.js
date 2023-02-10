import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"

const HeaderTop = ({ title, description }) => {
    const logoApp = require('📂assets/logo/logoApp.png');
    return (
        <View style={styles.container}>
            <View style={styles.imageHead}>
                <Image
                    style={styles.logo}
                    source={logoApp}
                />
            </View>
            <View style={styles.boxText}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
        </View>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    imageHead: {
        marginTop: 15,
    },
    logo: {
        height: 150,
        width: 150,
    },
    boxText: {
        marginTop: 15,
        alignItems: 'center'
    },
    textTitle: {
        color: Color.black,
        fontWeight: "bold",
        fontSize: 28,
    },
    textDescription: {
        marginTop: 10,
        fontSize: 18,
        color: Color.black,
        opacity: 0.4
    },
})