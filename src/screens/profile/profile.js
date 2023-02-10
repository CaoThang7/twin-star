import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from "react-native-elements"
import BottomTabView from './components/bottomTabView';
import { useSelector } from "react-redux"
import { selectAuth } from "📂redux/selector/auth"

const Profile = () => {
    const user = useSelector(selectAuth);
    const avatarEmpty = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU"

    return (
        <LinearGradient colors={Color.premiumDark} style={styles.container}>
            <ScrollView>
                <View style={styles.boxProfile}>
                    <TouchableOpacity style={styles.imageProfile}>
                        <Avatar
                            size={90}
                            rounded
                            source={{
                                uri: user ? user.avatar : avatarEmpty,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.txtStyle}>
                        <Text style={styles.txtName}>{user ? user.fullname : ""}</Text>
                        <Text style={styles.txtEmail}>{user ? user.email : ""}</Text>
                    </View>
                </View>
                <View style={styles.topTap}>
                    <BottomTabView />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
    topTap: {
        height: Dimensions.get('window').height
    }
})