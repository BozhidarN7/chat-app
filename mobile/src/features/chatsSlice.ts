import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Chat } from '../interfaces/chatInterfaces';
import { getChats } from '../services/userService';

interface ChatInterface {
    chats: Chat[];
    status: string;
    isChatDrawerOpen: boolean;
    isTabScreen: boolean;
}

const initialState: ChatInterface = {
    chats: [],
    status: 'idle',
    isChatDrawerOpen: false,
    isTabScreen: false,
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
        isChatDrawerOpenChanged(state, action) {
            state.isChatDrawerOpen = action.payload;
        },
        isTabScreenChanged(state, action) {
            state.isTabScreen = action.payload;
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
    previousMessagesAdded,
    isChatDrawerOpenChanged,
    isTabScreenChanged,
    newMessageAdded,
} = chatsSlice.actions;

export default chatsSlice.reducer;
