import { createSlice } from '@reduxjs/toolkit';

import { Chat } from 'interfaces/chatInterfaces';
interface ChatInterface {
    chats: Chat[];
}

const initialState: ChatInterface = {
    chats: [],
};

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        newChatAdded(state, action) {
            state.chats = [...state.chats, action.payload];
        },
    },
});

export const { newChatAdded } = chatsSlice.actions;

export default chatsSlice.reducer;
