import { StyleSheet, View } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from "📂common/icon"
import Color from "📂common/color"

const HeaderBar = ({ navigation }) => {
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.containerHeader}>
            <BackIcon
                onPress={onBack}
                name={Icons.MaterialIcons.goback}
                color={Color.white}
                size={30}
            />
        </View>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    containerHeader: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        zIndex: 1
    }
})