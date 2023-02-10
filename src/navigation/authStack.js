import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { authStack } from "📂common/navigator"
import Login from "📂screens/auth/login"
import Register from "📂screens/auth/register"

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={authStack.login}>
            <Stack.Screen
                options={{ headerShown: false }}
                name={authStack.login}
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={authStack.register}
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthStack