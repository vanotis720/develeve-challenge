import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { LOGIN, REGISTER } from '../utils/constants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (name, email, password) => {
        setIsLoading(true);

        axios.post(REGISTER, {
            name,
            email,
            password,
        })
            .then(res => {
                let userInfo = res.data;
                if (userInfo.status == "Success") {
                    setUserInfo(userInfo.data);
                    AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.data));
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                }
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(LOGIN, {
            email,
            password,
        })
            .then(res => {
                let userInfo = res.data;
                if (userInfo.status == "Success") {
                    setUserInfo(userInfo.data);
                    AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.data));
                    setIsLoading(false);
                }
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    };

    const logout = () => {
        setIsLoading(true);
        setUserInfo({});
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }
            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};