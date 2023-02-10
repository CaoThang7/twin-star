import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Router from "📂navigation/rootSwitch"
import store from "./src/redux/store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App