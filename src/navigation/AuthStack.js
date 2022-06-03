import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../components/page/Register';
import Login from '../components/page/Login';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'S\'inscrire',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'S\'identifier',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;