import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import Icons from "📂common/icon"
import Color from "📂common/color"

const HeaderTop = ({ navigation }) => {
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <View style={styles.leftHeader}>
                    <BackIcon
                        onPress={onBack}
                        name={Icons.MaterialIcons.goback}
                        color={Color.black}
                        size={30}
                    />
                </View>
                <View style={styles.centerHeader}>
                    <Text style={styles.txtTitle}>Feedback</Text>
                </View>
                <View style={styles.rightHeader} />
            </View>
        </View>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 20,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftHeader: {
        flex: 1,
    },
    centerHeader: {
        flex: 2,
    },
    rightHeader: {
        flex: 1,
    },
    txtTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.black,
    }
})