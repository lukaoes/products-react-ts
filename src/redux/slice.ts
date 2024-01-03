import { createSlice } from '@reduxjs/toolkit'

interface userRoot {
    isLoggedIn: boolean;
}

const initialState: userRoot = {
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginEvent: (state) => {
            state.isLoggedIn = true
        },
        userLogoutEvent: (state) => {
            state.isLoggedIn = false
        }
    },
});

export const { userLoginEvent, userLogoutEvent } = userSlice.actions;
export const selectUser = (state: { user: userRoot }): boolean => state.user.isLoggedIn

export default userSlice.reducer;