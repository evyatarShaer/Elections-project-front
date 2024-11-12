import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { UserModel } from "../types/userModel";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get<UserModel[]>("http://localhost:4444/api/users");
    return response.data as UserModel[];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
});

