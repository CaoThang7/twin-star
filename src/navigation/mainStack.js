import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { mainStack } from "📂common/navigator"
import homeTabs from "./homeTabs"
import settingProfile from "📂screens/profile/settingProfile"
import productDetail from "📂screens/home/productDetail"
import searchScreen from "📂screens/home/search"

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false }}
            initialRouteName={mainStack.homeTab}>
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.homeTab}
                    component={homeTabs}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.settingProfile}
                    component={settingProfile}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.productDetail}
                    component={productDetail}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.searchScreen}
                    component={searchScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainStack