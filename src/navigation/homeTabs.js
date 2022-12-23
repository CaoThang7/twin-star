import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import HomeIcons from 'react-native-vector-icons/FontAwesome';
import VoucherIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookMarkIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcons from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { home } from '📂common/navigator';
import Home from '📂screens/home/home';
import Voucher from '📂screens/voucher/voucher';
import BookMark from '📂screens/bookmark/bookmark';
import Profile from '📂screens/profile/profile';
import Color from "📂common/color"

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: Color.white,
                tabBarInactiveTintColor: Color.drakGrey,
                tabBarBackground: () => (
                    <View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={Color.premiumDark}
                            style={{ height: '100%', borderRadius: 25 }}
                        />
                    </View>
                ),
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    height: 70,
                    borderRadius: 25,
                    borderTopWidth: 0,
                    shadowColor: 'white',
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    elevation: 10,
                },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name={home.homeStack}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcons name='reddit-alien' color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name={home.voucher}
                component={Voucher}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Voucher',
                    tabBarIcon: ({ color, size }) => (
                        <VoucherIcons name="gift-outline" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name={home.bookmark}
                component={BookMark}
                options={{
                    headerShown: false,
                    tabBarLabel: 'BookMark',
                    tabBarIcon: ({ color, size }) => (
                        <BookMarkIcons name="bookmark" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name={home.profile}
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcons name="user" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs