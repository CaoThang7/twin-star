import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Color from "📂common/color"
import LinearGradient from 'react-native-linear-gradient';
import HeaderHome from './components/headerHome';
import WelcomeTop from './components/welcomeTop';
import ProductList from './components/productList';
import { ScrollView } from 'react-native-virtualized-view';
import { useDispatch, useSelector } from "react-redux"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"
import { selectProfileUser } from "📂redux/selector/user"
import { useNavigation } from "@react-navigation/native"
import { getUserInfo } from '📂redux/slices/user'

const Home = () => {
    const profile = useSelector(selectProfileUser);
    const dataAuth = useSelector(selectAuth);
    const authToken = useSelector(selectAuthToken);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const id = dataAuth ? dataAuth._id : "";

    useEffect(() => {
        dispatch(getUserInfo({ id, authToken }))
    }, [dispatch])

    return (
        <LinearGradient colors={Color.premiumDark} style={styles.container}>
            <ScrollView>
                <HeaderHome profile={profile} navigation={navigation} />
                <WelcomeTop profile={profile} />
                <ProductList />
            </ScrollView>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})