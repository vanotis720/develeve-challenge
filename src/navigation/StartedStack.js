// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../components/page/GetStarted';

const Stack = createNativeStackNavigator();

function StartedStack() {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ title: 'Get Started' }}
            />
        </Stack.Navigator>
    );
}

export default StartedStack;