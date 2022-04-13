import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { FriendshipRequest, User } from 'interfaces/userInterfaces';
import { getNewFriendShipRequest } from 'services/friendshipRequestsService';
import { getAllUsers, getNewFriendShipRequests } from 'services/userService';

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
    reducers: {
        friendshipRequestDeleted(state, action) {
            state.newFriendshipRequests = state.newFriendshipRequests.filter(
                (fs) => fs.friendshipId !== action.payload
            );
        },
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

export const { friendshipRequestDeleted, profileImageChanged } =
    usersSlice.actions;

export default usersSlice.reducer;
