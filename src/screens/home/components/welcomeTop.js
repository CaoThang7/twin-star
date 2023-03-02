import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from "📂common/color"

const WelcomeTop = ({ profile }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxText}>
                <Text style={styles.textWelcome}>Hello! {profile ? profile.fullname : ""}</Text>
                <Text style={styles.textSuggest}>Let's find your favorite movie</Text>
            </View>
        </View>
    )
}

export default WelcomeTop

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
    },
    boxText: {
        flexDirection: 'column',
        margin: 5
    },
    textWelcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Color.white,
        opacity: 0.8
    },
    textSuggest: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.5,
        marginTop: 5
    }
})