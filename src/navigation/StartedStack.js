import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../components/page/GetStarted';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

function StartedStack() {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ title: 'Get Started', headerShown: false }}
            />
            <Stack.Screen
                name="Auth"
                component={AuthStack}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    );
}

export default StartedStack;