import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import tw from 'twrnc';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from '../../features/usersSlice';
import Avatar from '../common/Avatar';

const UsersList = () => {
    const dispatch = useAppDispatch();

    const users = useAppSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <ScrollView>
            {users.map((user) => (
                <Ripple key={user.id}>
                    <View style={tw`flex flex-row py-2 px-2`}>
                        <View>
                            <Avatar size={11} />
                        </View>
                        <View style={tw`ml-4 self-center`}>
                            <Text style={tw`text-base text-black`}>
                                {user.fullName}
                            </Text>
                        </View>
                    </View>
                </Ripple>
            ))}
        </ScrollView>
    );
};

export default UsersList;
