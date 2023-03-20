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
            duration: 3000,
            useNativeDriver: false,
        }).start();

        setTimeout(() => {
            navigation.navigate(rootSwitch.main)
        }, 3500);
    }

    return { animatedValue, onAnimatedStateChanged }
}

export default useAnimated