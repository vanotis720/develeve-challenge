import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppBottom from './AppBottom';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/slices/authSlice';


const AppRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <NavigationContainer>
            {
                isLoggedIn ? <AppBottom /> : <AuthStack />
            }
        </NavigationContainer>
    )
}
export default AppRoute
