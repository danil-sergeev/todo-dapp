import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ListScreen from '../screens/ListScreen';
// import DetailScreen from '../screens/DetailScreen';

import {RootNavStack} from '../types';

const Stack = createStackNavigator<RootNavStack>();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="List" component={ListScreen} />
                {/*<Stack.Screen name="Detail" component={DetailScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
