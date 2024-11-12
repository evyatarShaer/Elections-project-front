import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/userModel";
import { fetchUsers } from "../../service/userApi";

interface UserState{
    users: UserModel[];
    status: string;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    status: "idle",
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
           .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
           .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default userSlice.reducer;