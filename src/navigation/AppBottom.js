import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';
import Profile from '../components/page/Profile';
import Favorite from '../components/page/Favorite';
import CourseForm from '../components/page/CourseForm';
import CourseStack from './CourseStack';

const Tab = createBottomTabNavigator();

const CustomTabButton = (props) => (
    <TouchableOpacity
        {...props}
        style={
            props.accessibilityState.selected
                ? [props.style, {
                    borderTopColor: colors.PRIMARY,
                    borderBottomWidth: 5,
                    marginBottom: 1,
                    marginVertical: 10,
                    marginHorizontal: 30,
                    borderRadius: 15,
                    backgroundColor: colors.PUREWHITE
                }]
                : props.style
        }
    />
);

export default function AppBottom() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: colors.PRIMARY,
                tabBarInactiveTintColor: colors.BLACK,
                // tabBarActiveBackgroundColor: colors.GRAY,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: colors.SECONDARY,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="CourseStack"
                component={CourseStack}
                options={{
                    tabBarButton: CustomTabButton,
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="CourseForm"
                component={CourseForm}
                options={{
                    tabBarButton: CustomTabButton,
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
                    tabBarButton: CustomTabButton,
                    tabBarLabel: 'Favoris',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={Profile}
                options={{
                    tabBarButton: CustomTabButton,
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