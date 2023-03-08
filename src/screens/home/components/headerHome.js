import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import { Avatar } from "react-native-elements"
import ImgUrl from "📂common/imgurl"
import RightIcon from 'react-native-vector-icons/AntDesign';
import { mainStack } from "📂common/navigator"

const HeaderHome = ({ profile, navigation }) => {
    const nameApp = require('📂assets/logo/nameApp.png');

    const gotoSearchScreen = () => {
        navigation.navigate(mainStack.searchScreen)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.imageProfile}>
                <Avatar
                    size={50}
                    rounded
                    source={{
                        uri: profile ? profile.avatar : ImgUrl.avatarEmpty,
                    }}
                />
            </TouchableOpacity>
            <View style={styles.boxImage}>
                <Image
                    style={styles.imageNameApp}
                    source={nameApp} />
            </View>
            <TouchableOpacity onPress={gotoSearchScreen}>
                <RightIcon
                    name={"search1"}
                    color={Color.white}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageProfile: {
        backgroundColor: 'grey',
        borderRadius: 50,
        shadowColor: Color.yellow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
    boxImage: {
        marginRight: 10,
        height: 50,
        width: 150,
    },
    imageNameApp: {
        marginTop: 10,
        height: 50,
        width: 150,
    }
})