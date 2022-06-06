import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/page/Home';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';
import Profile from '../components/page/Profile';
import Favorite from '../components/page/Favorite';
import CourseForm from '../components/page/CourseForm';

const Tab = createBottomTabNavigator();

export default function AppBottom() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: colors.PRIMARY,
                // tabBarInactiveTintColor: colors.SECONDARY,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Course"
                component={CourseForm}
                options={{
                    tabBarLabel: 'Cours',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-plus" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarLabel: 'Favoris',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="star" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={Profile}
                options={{
                    tabBarLabel: 'Compte',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}