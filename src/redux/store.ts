import {IUser} from "../models";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services";

type UserSliceType = {
    users: IUser[]
}
const userInitState: UserSliceType = {
    users: []
}


const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        const users = await userService.getAll();
        return users;
    }
);

createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},

    // всі асинхронні функції описуємо в extraReducers
    extraReducers: (builder) =>
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
})

