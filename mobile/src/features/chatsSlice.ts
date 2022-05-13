import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Chat, EditMessageOptions } from '../interfaces/chatInterfaces';
import { getChats } from '../services/userService';

interface ChatInterface {
    chats: Chat[];
    status: string;
    isChatDrawerOpen: boolean;
    isTabScreen: boolean;
    editMessageOptions: EditMessageOptions;
}

const initialState: ChatInterface = {
    chats: [],
    status: 'idle',
    isChatDrawerOpen: false,
    isTabScreen: false,
    editMessageOptions: {
        messageId: '',
        message: '',
        isEditActivated: false,
    },
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
        editMessageActivated(state, action) {
            state.editMessageOptions = action.payload;
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
    messageDeleted,
    editMessageActivated,
    messageEdited,
} = chatsSlice.actions;

export default chatsSlice.reducer;
