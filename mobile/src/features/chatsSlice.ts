import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Chat } from '../interfaces/chatInterfaces';
import { getChats } from '../services/userService';

interface ChatInterface {
    chats: Chat[];
    status: string;
    areChatsShown: boolean;
}

const initialState: ChatInterface = {
    chats: [],
    status: 'idle',
    areChatsShown: true,
};

export const fetchChats = createAsyncThunk(
    'chats/fetchChats',
    async (id: string) => {
        const res = await getChats(id);
        const data = res.data;
        return data.data;
    }
);

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchChats.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.chats = action.payload;
        });
    },
});

export default chatsSlice.reducer;
