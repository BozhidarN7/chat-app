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
    openChatSpaceHandler: () => void;
};

const ChatsList = ({ openChatSpaceHandler }: Props) => {
    const chats = useAppSelector((state) => state.chats.chats);
    const { loadingChat } = useChat();

    const renderItem = ({ item }: any) => {
        return (
            <Ripple onPress={openChatSpaceHandler.bind(null, item.roomId)}>
                <View style={tw`flex-1 flex-row py-2 px-5`}>
                    <View>
                        <Avatar size={11} />
                    </View>
                    <View style={tw`ml-4`}>
                        <Text style={tw`text-base text-blue-700`}>
                            {item.friendFullName}
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
                    <View style={tw`bg-pink-800 rounded-full w-9 h-9 mr-5`}>
                        <Pressable
                            android_ripple={{
                                color: 'pink',
                                borderless: true,
                            }}
                        >
                            <Ionicons
                                name="add-outline"
                                size={36}
                                color="white"
                            />
                        </Pressable>
                    </View>
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
