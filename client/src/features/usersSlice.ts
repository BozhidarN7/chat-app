import { createSlice } from '@reduxjs/toolkit';

import { User } from 'interfaces/userInterfaces';

interface UsersSliceInterface {
    users: User[];
}

const initialState: UsersSliceInterface = {
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default usersSlice.reducer;
