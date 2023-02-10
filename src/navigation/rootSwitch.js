import React from "react"
import MainStack from "./mainStack"
import SplashStack from "./splashStack"
import AuthStack from "./authStack"
import { createStackNavigator } from "@react-navigation/stack"
import { rootSwitch } from "📂common/navigator"

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={rootSwitch.splash} component={SplashStack} />
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
      <Stack.Screen name={rootSwitch.auth} component={AuthStack} />
    </Stack.Navigator>
  )
}

export default RootStack