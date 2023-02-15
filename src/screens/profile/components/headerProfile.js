import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ImgUrl from "📂common/imgurl"
import Color from "📂common/color"
import { Avatar } from "react-native-elements"
import { mainStack } from "📂common/navigator"

const HeaderProfile = ({ profile, navigation }) => {
    const gotoSettingProfile = () => {
        navigation.navigate(mainStack.settingProfile)
    }
    
    return (
        <View style={styles.boxProfile}>
            <TouchableOpacity
                style={styles.imageProfile}
                onPress={gotoSettingProfile}>
                <Avatar
                    size={90}
                    rounded
                    source={{
                        uri: profile ? profile.avatar : ImgUrl.avatarEmpty,
                    }}
                />
            </TouchableOpacity>
            <View style={styles.txtStyle}>
                <Text style={styles.txtName}>{profile ? profile.fullname : ""}</Text>
                <Text style={styles.txtEmail}>{profile ? profile.email : ""}</Text>
            </View>
        </View>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    boxProfile: {
        flexDirection: 'column',
        padding: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        backgroundColor: 'grey',
        borderRadius: 50,
        shadowColor: Color.yellow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 30
    },
    txtStyle: {
        marginTop: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    txtName: {
        color: Color.white,
        fontWeight: "bold",
        fontSize: 18
    },
    txtEmail: {
        color: Color.white,
        fontWeight: "bold",
        fontSize: 22
    },
})