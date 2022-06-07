import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from '../components/page/Course';
import Home from '../components/page/Home';

const Stack = createNativeStackNavigator();

function CourseStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Accueil', headerShown: false }}
            />
            <Stack.Screen
                name="Course"
                component={Course}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default CourseStack;