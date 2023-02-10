import { Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { Dialog } from "react-native-elements"
import Color from "📂common/color"

const DialogCustom = ({
    isVisible,
    onBackdropPress,
    colorTitle,
    colorBtn,
    title,
    txtBtn
}) => {
    return (
        <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <Dialog.Title title="Twin Star" titleStyle={styles.txtDialog} />
            <Text style={[styles.txtTitle, { color: colorTitle }]}>{title}</Text>
            <TouchableOpacity onPress={onBackdropPress}>
                <Text style={[styles.textBtn, { color: colorBtn }]}>{txtBtn}</Text>
            </TouchableOpacity>
        </Dialog>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        textAlign: "center",
        fontSize: 20,
    },
    txtDialog: {
        textAlign: "center",
        fontSize: 24,
        color: Color.magenta,
        fontWeight: 'bold'
    },
    textBtn: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
    },
})

export default DialogCustom