import { createSlice } from "@reduxjs/toolkit"
import { getItem } from "../../utils/async-storage";

// check the user info in storage to determine initialState
let initialState = {
    isLoggedIn: false,
    email: null,
    userName: null
}

getItem('userState').then(userState => {
    console.log('userState ' + userState);
    if (userState !== null) {
        initialState = {
            isLoggedIn: userState.isLoggedIn,
            email: userState.email,
            userName: userState.userName
        }
    }
});

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userName = action.payload.userName;

        },
        setSignOut: (state) => {
            state.email = null;
            state.userName = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;