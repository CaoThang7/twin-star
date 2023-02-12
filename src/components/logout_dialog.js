import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import React from "react"
import { Dialog } from "react-native-elements"
import Color from "📂common/color"

const LogOutDiaLog = ({
    isVisible,
    onBackdropPress,
    onLogOut,
    colorTitle,
    colorBtnYes,
    colorBtnNo,
    title,
    titleDiaLog,
    txtBtnYes,
    txtBtnNo
}) => {
    return (
        <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <Dialog.Title title={titleDiaLog} titleStyle={styles.txtDialog} />
            <Text style={[styles.txtTitle, { color: colorTitle }]}>{title}</Text>
            <View style={styles.boxBtn}>
                <TouchableOpacity onPress={onLogOut}>
                    <Text style={[styles.textBtn, { color: colorBtnYes }]}>{txtBtnYes}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onBackdropPress}>
                    <Text style={[styles.textBtn, { color: colorBtnNo }]}>{txtBtnNo}</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        textAlign: "center",
        fontSize: 20,
        opacity: 0.5
    },
    txtDialog: {
        textAlign: "center",
        fontSize: 24,
        color: Color.magenta,
        fontWeight: 'bold',
    },
    boxBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    textBtn: {
        textAlign: "center",
        fontSize: 20,
    },
})

export default LogOutDiaLog