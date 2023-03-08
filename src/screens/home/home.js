import { StyleSheet } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import LinearGradient from 'react-native-linear-gradient';
import HeaderHome from './components/headerHome';
import { ScrollView } from 'react-native-virtualized-view';
import { selectAuth } from "📂redux/selector/auth"
import { useSelector } from "react-redux"
import WelcomeTop from './components/welcomeTop';
import ProductList from './components/productList';
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const profile = useSelector(selectAuth);
    const navigation = useNavigation();

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