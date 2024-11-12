import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './featurs/userSlice';
import candidatesReducer from './featurs/candidatesSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        candidates: candidatesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
