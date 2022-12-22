import { StyleSheet, Image, ImageBackground, Animated } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Color from "📂common/color"
import useAnimated from "📂hooks/useAnimated"

const Splash = () => {
    const logoApp = require('📂assets/logo/logoApp.png');
    const backgroundApp = require('📂assets/gif/backgroundApp.gif');
    const nameApp = require('📂assets/logo/nameApp.png');
    const { animatedValue, onAnimatedStateChanged } = useAnimated();

    useEffect(() => {
        onAnimatedStateChanged();
    }, [animatedValue])

    return (
        <LinearGradient colors={Color.aubergine} style={styles.container}>
            <ImageBackground
                source={backgroundApp}
                style={styles.imageBackground}>
                <Animated.View style={[styles.box, { marginTop: animatedValue.y }]}>
                    <Image
                        style={styles.avatar}
                        source={logoApp} />
                </Animated.View>
                <Animated.View style={{ marginLeft: animatedValue.x }}>
                    <Image
                        style={styles.imageNameApp}
                        source={nameApp} />
                </Animated.View>
            </ImageBackground>
        </LinearGradient>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    text: {
        color: Color.white,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    imageNameApp: {
        height: 150,
        width: 500,
        resizeMode: 'center',
    }
})