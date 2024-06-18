import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen"
import LoginScreen from './Screens/LoginScreen';
import PersonsItem from './Screens/PersonsItem';
import { Image } from 'react-native';
// import SettingScreen from './screens/SettingScreen';
// import PlayerScreen from './screens/PlayerScreen';
// import PlayNewsScreen from './screens/PlayNewsScreen';

const Stack = createStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Person' component={PersonsItem} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}