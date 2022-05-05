import { createSlice } from '@reduxjs/toolkit';

import { User, FriendshipRequest } from '../interfaces/userInterfaces';

interface UsersSliceInterface {
    users: User[];
    newFriendshipRequests: FriendshipRequest[];
    profileImage: string | null;
    status: string;
}

const initialState: UsersSliceInterface = {
    users: [],
    newFriendshipRequests: [],
    profileImage: null,
    status: 'idle',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        profileImageChanged(state, action) {
            state.profileImage = action.payload;
        },
    },
});

export const { profileImageChanged } = usersSlice.actions;

export default usersSlice.reducer;
