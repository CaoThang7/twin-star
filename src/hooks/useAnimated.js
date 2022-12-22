import { useRef } from "react"
import { Animated } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { rootSwitch } from "📂common/navigator"

const useAnimated = () => {
    const navigation = useNavigation();
    const animatedValue = useRef(new Animated.ValueXY({
        x: -1000,
        y: -1000,
    })).current;

    function onAnimatedStateChanged() {
        Animated.timing(animatedValue, {
            toValue: {
                x: 0,
                y: 0
            },
            duration: 2000,
            useNativeDriver: false,
        }).start();

        setTimeout(() => {
            navigation.navigate(rootSwitch.main)
        }, 3000);
    }

    return { animatedValue, onAnimatedStateChanged }
}

export default useAnimated