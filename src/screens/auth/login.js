import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import HeaderTop from './components/headerTop'
import FormLogin from './components/formLogin'

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <HeaderTop
                    title={"Login"}
                    description={"We're happy to see you back again!"}
                />
                <FormLogin />
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 20
    },
})