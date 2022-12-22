import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { home } from '📂common/navigator';
import Home from '📂screens/home/home';
import Profile from '📂screens/profile/profile';
import Color from "📂common/color"

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Color.magenta,
                tabBarInactiveTintColor: Color.black,
                tabBarStyle: {
                    height: 80,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    marginTop: -20,
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                    margin: 0,
                    paddingBottom: 5,
                },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name={home.homeStack}
                component={Home}
                options={{
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen
                name={home.profile}
                component={Profile}
                options={{
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={40} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs