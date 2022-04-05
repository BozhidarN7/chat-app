import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { FriendshipRequest, User } from 'interfaces/userInterfaces';
import { getNewFriendShipRequest } from 'services/friendshipRequestsService';
import { getAllUsers, getNewFriendShipRequests } from 'services/userService';

interface UsersSliceInterface {
    users: User[];
    newFriendshipRequests: FriendshipRequest[];
    status: string;
}

const initialState: UsersSliceInterface = {
    users: [],
    newFriendshipRequests: [],
    status: 'idle',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const data = await getAllUsers();
    return data.data.users;
});

export const fetchNewFriendRequests = createAsyncThunk(
    '/users/fetchNewFriendRequests',
    async (id: string) => {
        const data = await getNewFriendShipRequests(id);
        return data.data.friendShipRequests;
    }
);

export const fetchNewFriendRequest = createAsyncThunk(
    '/users/fetchNewFriendRequest',
    async (firendshipId: string) => {
        const data = await getNewFriendShipRequest(firendshipId);
        return data.data.friendshipRequest;
    }
);

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
        builder.addCase(fetchNewFriendRequests.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchNewFriendRequests.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newFriendshipRequests = action.payload;
        });
        builder.addCase(fetchNewFriendRequest.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchNewFriendRequest.fulfilled, (state, action) => {
            state.status = 'succeeded';
            if (
                !state.newFriendshipRequests.find(
                    (fs) => fs.friendshipId === action.payload.friendshipId
                )
            ) {
                state.newFriendshipRequests = [
                    ...state.newFriendshipRequests,
                    action.payload,
                ];
            } else {
                state.newFriendshipRequests = [...state.newFriendshipRequests];
            }
        });
    },
});

export default usersSlice.reducer;
