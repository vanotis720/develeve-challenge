import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppBottom from './AppBottom';
import AuthStack from './AuthStack';
import { ActivityIndicator } from 'react-native';
import colors from '../theme/colors';
import { AuthContext } from '../providers/AuthProvider';


const AppRoute = () => {

    const { userInfo, splashLoading } = useContext(AuthContext);
    console.log(userInfo);

    return (
        <NavigationContainer>
            {splashLoading ? (
                <ActivityIndicator size='large' color={colors.PRIMARY} />
            ) : userInfo.access_token ? (
                <AppBottom />
            ) : <AuthStack />}
        </NavigationContainer>
    )
}
export default AppRoute
