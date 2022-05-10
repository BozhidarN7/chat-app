import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

import UserAvatarMenu from '../components/menus/UserAvatarMenu';
import SearchField from '../components/common/SearchField';
import UsersList from '../components/chat/UsersList';

type Props = {
    navigation: any;
};

const UsersScreen = ({ navigation }: Props) => {
    const [userSearchQuery, setUserSearchQuery] = useState('');

    const setUserSearchQueryHandler = (query: string) => {
        setUserSearchQuery(query);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons
                    onPress={() => navigation.goBack()}
                    name="arrow-back-outline"
                    size={24}
                    color="black"
                    style={tw`-ml-1`}
                />
            ),
            headerRight: () => <UserAvatarMenu />,
            headerTitle: () => (
                <SearchField
                    placeholder="Find someone..."
                    searchValue={userSearchQuery}
                    setSearchValueHandler={setUserSearchQueryHandler}
                />
            ),
        });
    }, [navigation, userSearchQuery]);
    return (
        <View>
            <UsersList userSearchQuery={userSearchQuery} />
        </View>
    );
};

export default UsersScreen;
