import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from "📂common/color"
import Loading from '📂components/loading';
import HeaderProfile from './components/headerProfile';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabView from './components/bottomTabView';
import { useDispatch, useSelector } from "react-redux"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"
import { selectProfileUser } from "📂redux/selector/user"
import { useNavigation } from "@react-navigation/native"
import { getUserInfo } from '📂redux/slices/user'

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const profile = useSelector(selectProfileUser);
    const dataAuth = useSelector(selectAuth);
    const authToken = useSelector(selectAuthToken);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const id = dataAuth ? dataAuth._id : "";

    useEffect(() => {
        dispatch(getUserInfo({ id, authToken }))
            .unwrap()
            .then((data) => {
                if (data) {
                    setLoading(false)
                } else {
                    setLoading(true)
                }
            })
    }, [dispatch])

    if (loading) {
        return (
            <View style={styles.loading}>
                <Loading color={Color.black} />
            </View>
        )
    }

    return (
        <LinearGradient colors={Color.premiumDark} style={styles.container}>
            <ScrollView>
                <HeaderProfile profile={profile} navigation={navigation} />
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
    topTap: {
        height: Dimensions.get('window').height
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})