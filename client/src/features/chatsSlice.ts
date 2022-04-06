import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Chat } from 'interfaces/chatInterfaces';
import { getChats } from 'services/userService';
interface ChatInterface {
    chats: Chat[];
    status: string;
}

const initialState: ChatInterface = {
    chats: [],
    status: 'idle',
};

export const fetchChats = createAsyncThunk(
    'chats/fetchChats',
    async (id: string) => {
        const data = await getChats(id);
        return data.data;
    }
);

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        newChatAdded(state, action) {
            state.chats = [...state.chats, action.payload];
        },
    },
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

export const { newChatAdded } = chatsSlice.actions;

export default chatsSlice.reducer;
