import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {
    DrawerLayoutAndroid,
    Dimensions,
    Text,
    ScrollView,
    View,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FlatList } from 'react-native-bidirectional-infinite-scroll';
import tw from 'twrnc';

import UserAvatarMenu from '../components/menus/UserAvatarMenu';
import SearchField from '../components/common/SearchField';
import ChatsList from '../components/chat/ChatsList';
import Message from '../components/chat/Message';
import RenderMessage from '../components/chat/RenderMessage';
import MessageInput from '../components/inputs/MessageInput';
import ScrollToBottomButton from '../components/buttons/ScrollToBottomButton';
import { useChat } from '../contexts/ChatCtx';
import { useAppSelector } from '../app/hooks';
import { FileMessage, TextMessage } from '../interfaces/chatInterfaces';
import {
    isChatDrawerOpenChanged,
    isTabScreenChanged,
} from '../features/chatsSlice';
import { useAppDispatch } from '../app/hooks';
import { ChatsStackParamList } from '../interfaces/RoutingInterfaces';

type Props = NativeStackScreenProps<ChatsStackParamList>;

const ChatScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch();

    const drawer = useRef<DrawerLayoutAndroid>(null);
    const messageBoxRef = useRef<KeyboardAwareScrollView>(null);

    const [scrollToBottomButtonVisibility, setScrollToBottomButtonVisibility] =
        useState(false);
    const [roomId, setRoomId] = useState<string>();
    const [chatSearchQuery, setChatSearchQuery] = useState('');

    const { openChatRoom, loadingChat } = useChat();

    const isChatDrawerOpen = useAppSelector(
        (state) => state.chats.isChatDrawerOpen
    );
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    const openChatSpaceHandler = async (roomId: string) => {
        setRoomId(roomId);
        await openChatRoom(roomId);
        if (drawer.current) {
            drawer.current.closeDrawer();
        }
    };

    const setChatSearchQueryHandler = (query: string) => {
        setChatSearchQuery(query);
    };

    const handleScrollEvent = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { height: scrollHeight } = e.nativeEvent.contentSize;
        const { height: clientHeight } = e.nativeEvent.layoutMeasurement;
        const { y: scrollTop } = e.nativeEvent.contentOffset;

        if (scrollHeight - scrollTop > clientHeight + 100) {
            setScrollToBottomButtonVisibility(true);
        } else {
            setScrollToBottomButtonVisibility(false);
        }
    };

    useEffect(() => {
        if (messageBoxRef && messageBoxRef.current) {
            messageBoxRef.current.scrollToEnd(true);
        }
    }, [messages]);

    useLayoutEffect(() => {
        if (!drawer.current) return;

        dispatch(isTabScreenChanged(false));

        if (isChatDrawerOpen) {
            drawer.current.openDrawer();
        } else {
            if (!loadingChat) {
                drawer.current.closeDrawer();
            }
        }
    }, [isChatDrawerOpen]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons
                    onPress={() =>
                        dispatch(isChatDrawerOpenChanged(!isChatDrawerOpen))
                    }
                    name="menu-outline"
                    size={36}
                    color="black"
                    style={tw`-ml-2`}
                />
            ),
            headerTitle: () => (
                <SearchField
                    placeholder="Search a recent chat..."
                    searchValue={chatSearchQuery}
                    setSearchValueHandler={setChatSearchQueryHandler}
                />
            ),
            headerRight: () => <UserAvatarMenu />,
        });
    }, [navigation, chatSearchQuery]);

    const chatsView = () => (
        <ChatsList
            openChatSpaceHandler={openChatSpaceHandler}
            chatSearchQuery={chatSearchQuery}
        />
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition="left"
            renderNavigationView={chatsView}
            onDrawerOpen={() => dispatch(isChatDrawerOpenChanged(true))}
            onDrawerClose={() => dispatch(isChatDrawerOpenChanged(false))}
        >
            <KeyboardAwareScrollView
                style={tw`flex-1`}
                ref={messageBoxRef}
                onScroll={handleScrollEvent}
            >
                <ScrollView style={tw`mx-1 my-2`}>
                    {!roomId ? (
                        <Text style={tw`text-base`}>
                            Open a chat from the menu
                        </Text>
                    ) : null}
                    {messages?.map((message) => {
                        const type = message.messageType;

                        if (type === 'file') {
                            message = message as FileMessage;

                            return (
                                <Message
                                    senderFullName={message.senderFullName}
                                    message={message.file}
                                    messageId={message.id}
                                    senderId={message.senderId}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        } else {
                            message = message as TextMessage;

                            return (
                                <Message
                                    senderFullName={message.senderFullName}
                                    message={message.message}
                                    messageId={message.id}
                                    senderId={message.senderId}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        }
                    })}
                </ScrollView>
            </KeyboardAwareScrollView>
            {/* <View style={tw`flex-1`}>
                {!roomId ? (
                    <Text style={tw`text-base mx-1 my-2`}>
                        Open a chat from the menu
                    </Text>
                ) : null}
                <FlatList
                    style={tw`mx-1 my-2`}
                    data={messages}
                    renderItem={RenderMessage}
                    keyExtractor={(item) => item.id}
                    onStartReached={async () => {}}
                    onEndReached={async () => {}}
                />
            </View> */}
            <ScrollToBottomButton
                messageBoxRef={messageBoxRef}
                scrollToBottomButtonVisibility={scrollToBottomButtonVisibility}
            />
            {roomId ? <MessageInput roomId={roomId} /> : null}
        </DrawerLayoutAndroid>
    );
};

export default ChatScreen;
