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
        newMessageAdded(state, action) {
            state.chats
                .find((chat) => chat.roomId === action.payload.roomId)
                ?.messages.push(action.payload.message);
        },
        previousMessagesAdded(state, action) {
            state.chats.find(
                (chat) => chat.roomId === action.payload.roomId
            )!.messages = action.payload.messages;
        },
        loadMorePreviousMessages(state, action) {
            state.chats
                .find((chat) => chat.roomId === action.payload.roomId)
                ?.messages.unshift(...action.payload.messages);
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

export const {
    newChatAdded,
    newMessageAdded,
    loadMorePreviousMessages,
    previousMessagesAdded,
} = chatsSlice.actions;

export default chatsSlice.reducer;
