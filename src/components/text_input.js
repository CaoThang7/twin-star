import { StyleSheet, TextInput } from 'react-native'
import React from "react"
import Color from "📂common/color"

const TextInputCustom = ({
    value,
    placeholder,
    label,
    onChangeText,
    editable,
    selectTextOnFocus,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            label={label}
            style={styles.inputStyle}
            onChangeText={onChangeText}
            editable={editable}
            selectTextOnFocus={selectTextOnFocus}
            underlineColorAndroid="transparent"
        />
    )
}

export default TextInputCustom

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: Color.white,
        height: 50,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.ghostWhite,
        marginVertical: 10,
        color: Color.black,
        paddingLeft: 15,
        fontSize: 16
    }
})