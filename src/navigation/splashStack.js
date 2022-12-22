import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { splashStack } from "📂common/navigator"
import Splash from "📂screens/splash/splash"

const Stack = createStackNavigator()

const SplashStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={splashStack.splash}>
            <Stack.Screen
                options={{ headerShown: false }}
                name={splashStack.splash}
                component={Splash}
            />
        </Stack.Navigator>
    )
}

export default SplashStack