import React from "react"
import MainStack from "./mainStack"
import { createStackNavigator } from "@react-navigation/stack"
import { rootSwitch } from "📂common/navigator"

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
    </Stack.Navigator>
  )
}

export default RootStack