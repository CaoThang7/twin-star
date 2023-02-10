import { Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import LinearGradient from 'react-native-linear-gradient';

const ButtonCustom = ({ onPress, color, titleStyle, style, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <LinearGradient colors={color} style={styles.container}>
                <Text style={titleStyle ? titleStyle : styles.txtTitle}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    txtTitle: { fontSize: 22, color: 'white' },
})

export default ButtonCustom