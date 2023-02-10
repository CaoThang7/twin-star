import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import MyBackUp from './myBackUp';
import MyReview from './myReview';
import { toptabStack } from '📂common/navigator';

const BottomTabView = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === toptabStack.backupStack) {
                        iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === toptabStack.reviewStack) {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                        colour = focused ? 'black' : 'gray';
                    }
                    return <Ionic name={iconName} color={colour} size={22} />;
                },
            })}>
            <Tab.Screen name={toptabStack.backupStack} component={MyBackUp} />
            <Tab.Screen name={toptabStack.reviewStack} component={MyReview} />
        </Tab.Navigator>
    );
};

export default BottomTabView;