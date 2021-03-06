import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Chat } from 'interfaces/chatInterfaces';
import { getChats } from 'services/userService';
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
        messageDeleted(state, action) {
            const chat = state.chats.find(
                (chat) => chat.roomId === action.payload.roomId
            );
            if (chat) {
                chat.messages = chat?.messages.filter(
                    (m) => m.id !== action.payload.messageId
                );
            }
        },
        messageEdited(state, action) {
            const chat = state.chats.find(
                (chat) => chat.roomId === action.payload.roomId
            );
            if (chat) {
                chat.messages = chat?.messages.map((m) => {
                    if (m.id === action.payload.messageId) {
                        return { ...m, message: action.payload.newText };
                    }
                    return m;
                });
            }
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
        showChatsBtnClicked(state, action) {
            state.areChatsShown = action.payload;
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
    messageDeleted,
    messageEdited,
    showChatsBtnClicked,
} = chatsSlice.actions;

export const selectAreChatsShown = (state: ChatInterface) =>
    state.areChatsShown;

export default chatsSlice.reducer;
