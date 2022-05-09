import React, { useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';

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
