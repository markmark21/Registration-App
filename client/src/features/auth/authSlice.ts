import {User} from "@prisma/client";
import {createSlice} from "@reduxjs/toolkit";
import {authApi} from "../../app/services/auth";
import {RootState} from "../../app/store";

interface InitialState {
    user: User & { token: string } | null,
    isAuthorized: boolean
}

const initialState: InitialState = {
    user: null,
    isAuthorized: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthorized = true
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthorized = true
            })
            .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthorized = true
            })
    }
})

export const {logout} = slice.actions
export default slice.reducer

export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized

export const selectUser = (state: RootState) => state.auth.user