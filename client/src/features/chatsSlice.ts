import { HubConnection } from '@microsoft/signalr';
import { createSlice } from '@reduxjs/toolkit';

type Connection = {
    connection: HubConnection;
};

interface ChatInterface {
    connection: Connection | undefined;
}

const initialState: ChatInterface = {
    connection: undefined,
};

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        connectionAdded(state, action) {
            state.connection = action.payload;
        },
    },
});

export const { connectionAdded } = chatsSlice.actions;

export default chatsSlice.reducer;
