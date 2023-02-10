import { StyleSheet } from 'react-native'
import React from "react"
import Color from "📂common/color"
import { Input } from "react-native-elements"
import LeftIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RightIcon from 'react-native-vector-icons/Entypo';

const InputCustom = ({
    value,
    placeholder,
    nameIconLeft,
    nameIconRight,
    isFocus,
    handleInputFocus,
    showPassword,
    secureTextEntry,
    errorMessage,
    handleInputChange
}) => {
    return (
        <Input
            placeholder={placeholder}
            leftIcon={
                <LeftIcon
                    name={nameIconLeft}
                    color={Color.black} size={25}
                    style={{ opacity: 0.6 }}
                />
            }
            rightIcon={
                <RightIcon
                    name={nameIconRight}
                    color={Color.black} size={25}
                    style={{ opacity: 0.6 }}
                    onPress={showPassword}
                />
            }
            secureTextEntry={secureTextEntry}
            inputContainerStyle={styles.inputStyle}
            containerStyle={
                isFocus
                    ? styles.inputContainerHover
                    : styles.inputContainerStyle
            }
            onFocus={handleInputFocus}
            value={value}
            onChangeText={handleInputChange}
            errorMessage={errorMessage}
            errorStyle={{ fontSize: 14 }}
        />
    )
}

export default InputCustom

const styles = StyleSheet.create({
    inputStyle: { borderBottomWidth: 0, top: 3 },
    inputContainerStyle: {
        borderColor: Color.grey,
        borderWidth: 1,
        height: 55,
        borderRadius: 10,
        marginTop: 20
    },
    inputContainerHover: {
        borderColor: Color.blue,
        borderWidth: 1,
        height: 55,
        borderRadius: 10,
        marginTop: 20
    },
})