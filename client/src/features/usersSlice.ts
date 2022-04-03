import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { User } from 'interfaces/userInterfaces';
import { getAllUsers } from 'services/userService';

interface UsersSliceInterface {
    users: User[];
    status: string;
}

const initialState: UsersSliceInterface = {
    users: [],
    status: 'idle',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const data = await getAllUsers();
    return data.data.users;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        });
    },
});

export default usersSlice.reducer;
