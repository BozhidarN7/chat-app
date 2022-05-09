import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Modal, Pressable } from 'react-native';
import Ripple from 'react-native-material-ripple';
import tw from 'twrnc';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from '../../features/usersSlice';
import Avatar from '../common/Avatar';

type Props = {
    userSearchQuery: string;
};

const UsersList = ({ userSearchQuery }: Props) => {
    const dispatch = useAppDispatch();

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [selectedUserFullName, setSelectedUserFullName] = useState('');

    const users = useAppSelector((state) => state.users.users).filter((u) =>
        u.fullName.toLowerCase().includes(userSearchQuery.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const openConfirmModalHandler = (userFullName: string) => {
        setIsConfirmModalOpen(true);
        setSelectedUserFullName(userFullName);
    };

    const closeConfirmModalHandler = () => {
        setIsConfirmModalOpen(false);
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
                    onPress={openConfirmModalHandler.bind(null, user.fullName)}
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
            <Modal
                transparent={true}
                animationType="slide"
                visible={isConfirmModalOpen}
            >
                <View style={tw`flex-1 justify-center items-center`}>
                    <View
                        style={tw`w-5/6 p-2 shadow-black bg-white rounded-lg`}
                    >
                        <Text
                            style={tw`text-base text-center text-black`}
                        >{`Are you sure you want to send a friend request to ${selectedUserFullName}`}</Text>
                        <View style={tw`flex flex-row self-center py-2`}>
                            <Ripple style={tw`py-2 bg-green-600 w-20 mr-2`}>
                                <Text
                                    style={tw`text-base text-center text-white rounded`}
                                >
                                    Accept
                                </Text>
                            </Ripple>
                            <Ripple
                                style={tw`py-2 bg-red-600 w-20`}
                                onPress={closeConfirmModalHandler}
                            >
                                <Text
                                    style={tw`text-base text-center text-white rounded`}
                                >
                                    Reject
                                </Text>
                            </Ripple>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default UsersList;
