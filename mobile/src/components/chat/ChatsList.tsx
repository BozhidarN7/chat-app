import { User } from 'interfaces/userInterfaces';
import React from 'react';
import { Text, View, FlatList, Pressable, Modal } from 'react-native';
import tw from 'twrnc';
import Ripple from 'react-native-material-ripple';
import { Ionicons } from '@expo/vector-icons';

import { useAppSelector } from '../../app/hooks';
import { useChat } from '../../contexts/ChatCtx';
import Avatar from '../common/Avatar';
import Spinner from '../common/Spinner';

type Props = {
    chatSearchQuery: string;
    openChatSpaceHandler: () => void;
};

const ChatsList = ({ openChatSpaceHandler, chatSearchQuery }: Props) => {
    const chats = useAppSelector((state) => state.chats.chats).filter((c) =>
        c.friendFullName
            .toLowerCase()
            .includes(chatSearchQuery.toLowerCase().trim())
    );

    const { loadingChat } = useChat();

    const getFriendFullNameFirstPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        return friendFullName.substring(0, startPosition);
    };

    const getFriendFullNameLastPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        const endPosition = startPosition + query.length;
        return friendFullName.substring(endPosition);
    };

    const getFriendFullNameBoldPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        const endPosition = startPosition + query.length;
        return friendFullName.substring(startPosition, endPosition);
    };

    const renderItem = ({ item }: any) => {
        return (
            <Ripple onPress={openChatSpaceHandler.bind(null, item.roomId)}>
                <View style={tw`flex-1 flex-row py-2 px-5`}>
                    <View>
                        <Avatar size={11} />
                    </View>
                    <View style={tw`ml-4`}>
                        <Text style={tw`text-base text-blue-700`}>
                            {getFriendFullNameFirstPart(
                                item.friendFullName,
                                chatSearchQuery
                            )}
                            <Text
                                style={tw.style(
                                    `text-base text-blue-700`,
                                    chatSearchQuery !== '' && 'font-bold'
                                )}
                            >
                                {getFriendFullNameBoldPart(
                                    item.friendFullName,
                                    chatSearchQuery
                                )}
                                <Text
                                    style={tw`text-base text-blue-700 font-normal`}
                                >
                                    {getFriendFullNameLastPart(
                                        item.friendFullName,
                                        chatSearchQuery
                                    )}
                                </Text>
                            </Text>
                        </Text>
                        <Text>New friend. Be the first to send message</Text>
                    </View>
                </View>
            </Ripple>
        );
    };

    return (
        <>
            <View>
                <View style={tw`py-2 pl-5 flex-row justify-between`}>
                    <Text style={tw`text-2xl`}>Chats</Text>
                </View>
                <FlatList data={chats} renderItem={renderItem} />
            </View>
            <Modal
                transparent={true}
                animationType="none"
                visible={loadingChat}
                style={tw`z-10`}
            >
                <Spinner text="Loading chat" />
            </Modal>
        </>
    );
};

export default ChatsList;
