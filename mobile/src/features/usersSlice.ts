import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { User, FriendshipRequest } from '../interfaces/userInterfaces';
import { getAllUsers, getNewFriendShipRequests } from '../services/userService';

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

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await getAllUsers();
    const data = res.data;

    return data.data.users;
});

export const fetchNewFriendRequests = createAsyncThunk(
    '/users/fetchNewFriendRequests',
    async (id: string) => {
        const res = await getNewFriendShipRequests(id);
        const data = res.data;

        return data.data.friendShipRequests;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        profileImageChanged(state, action) {
            state.profileImage = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload.sort((a: User, b: User) => {
                const nameA = a.fullName.toLowerCase();
                const nameB = b.fullName.toLowerCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        });
        builder.addCase(fetchNewFriendRequests.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchNewFriendRequests.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newFriendshipRequests = action.payload;
        });
    },
});

export const { profileImageChanged } = usersSlice.actions;

export default usersSlice.reducer;
