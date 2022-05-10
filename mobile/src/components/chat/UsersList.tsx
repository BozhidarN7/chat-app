import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, Pressable } from 'react-native';
import Ripple from 'react-native-material-ripple';
import tw from 'twrnc';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from '../../features/usersSlice';
import { useChat } from '../../contexts/ChatCtx';
import Avatar from '../common/Avatar';
import ConfirmModal from '../modals/ConfirmModal';

type Props = {
    userSearchQuery: string;
};

const UsersList = ({ userSearchQuery }: Props) => {
    const dispatch = useAppDispatch();

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [selectedUserFullName, setSelectedUserFullName] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');

    const { sendFriendRequest } = useChat();

    const users = useAppSelector((state) => state.users.users).filter((u) =>
        u.fullName.toLowerCase().includes(userSearchQuery.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const openConfirmModalHandler = (userId: string, userFullName: string) => {
        setIsConfirmModalOpen(true);
        setSelectedUserFullName(userFullName);
        setSelectedUserId(userId);
    };

    const closeConfirmModalHandler = () => {
        setIsConfirmModalOpen(false);
    };

    const sendFriendRequestHandler = async () => {
        setIsConfirmModalOpen(false);
        try {
            await sendFriendRequest(selectedUserId);
        } catch (err) {
            console.log(err);
        }
    };

    const getUserFullNameFirstPart = (fullName: string) => {
        const startPosition = fullName
            .toLowerCase()
            .indexOf(userSearchQuery.toLowerCase());
        const firstPart = fullName.substring(0, startPosition);

        return firstPart;
    };

    const getUserFullNameBoldPart = (fullName: string) => {
        const startPosition = fullName
            .toLowerCase()
            .indexOf(userSearchQuery.toLowerCase());
        const endPosition = startPosition + userSearchQuery.length;
        const boldPart = fullName.substring(startPosition, endPosition);

        return boldPart;
    };

    const getUserFullNameLastPart = (fullName: string) => {
        const startPosition = fullName
            .toLowerCase()
            .indexOf(userSearchQuery.toLowerCase());
        const endPosition = startPosition + userSearchQuery.length;
        const lastPart = fullName.substring(endPosition);

        return lastPart;
    };

    return (
        <ScrollView>
            {users.map((user) => (
                <Ripple
                    onPress={openConfirmModalHandler.bind(
                        null,
                        user.id,
                        user.fullName
                    )}
                    key={user.id}
                >
                    <View
                        style={tw.style(
                            `flex flex-row py-2 px-2`,
                            isConfirmModalOpen && 'opacity-25'
                        )}
                    >
                        <View>
                            <Avatar size={11} />
                        </View>
                        <View style={tw`ml-4 self-center`}>
                            <Text style={tw`text-base text-black`}>
                                {getUserFullNameFirstPart(user.fullName)}
                                <Text style={tw`font-bold`}>
                                    {getUserFullNameBoldPart(user.fullName)}
                                    <Text style={tw`font-normal`}>
                                        {getUserFullNameLastPart(user.fullName)}
                                    </Text>
                                </Text>
                            </Text>
                        </View>
                    </View>
                </Ripple>
            ))}
            <ConfirmModal
                isConfirmModalOpen={isConfirmModalOpen}
                acceptHandler={sendFriendRequestHandler}
                closeConfirmModalHandler={closeConfirmModalHandler}
                text={`Are you sure you want to send a friend request to ${selectedUserFullName}`}
            />
        </ScrollView>
    );
};

export default UsersList;
