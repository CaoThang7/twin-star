import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from "📂common/icon"
import Color from "📂common/color"

const HeaderTop = ({ navigation, search, onChangeSearch }) => {
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack}>
                <BackIcon
                    name={Icons.MaterialIcons.goback}
                    color={Color.black}
                    size={25}
                />
            </TouchableOpacity>
            <TextInput
                placeholder={"search..."}
                value={search}
                onChangeText={onChangeSearch}
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1,
        backgroundColor: Color.white,
        height: 50,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.opacityBlack,
        color: Color.black,
        paddingLeft: 15,
        fontSize: 16
    }
})