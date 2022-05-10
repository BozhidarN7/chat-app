import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';

import tw from 'twrnc';

import { useAuth } from 'src/contexts/AuthCtx';
import { useAppSelector } from '../../app/hooks';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

const UserAvatarMenu = () => {
    const [visible, setVisible] = useState(false);

    const { logout } = useAuth(0);
    const notifications = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    const showMenuHandler = () => {
        setVisible(true);
    };

    const closeMenuHandler = () => {
        setVisible(false);
    };

    return (
        <View>
            <Menu
                style={tw`top-13`}
                visible={visible}
                anchor={
                    <Pressable onPress={showMenuHandler}>
                        <View style={tw`relative`}>
                            <Badge
                                negativeTop={undefined}
                                negativeBottom={undefined}
                                negativeRight={undefined}
                                negativeLeft={undefined}
                                positiveTop={undefined}
                                positiveRight={0}
                                positiveBottom={undefined}
                                positiveLeft={undefined}
                            />
                            <Avatar size={11} />
                        </View>
                    </Pressable>
                }
                onRequestClose={closeMenuHandler}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>
                    <View style={tw`relative`}>
                        <Badge
                            negativeTop={4}
                            negativeBottom={undefined}
                            negativeRight={4}
                            negativeLeft={undefined}
                            positiveTop={undefined}
                            positiveRight={undefined}
                            positiveBottom={undefined}
                            positiveLeft={undefined}
                        />
                        <Text>Notifications</Text>
                    </View>
                </MenuItem>
                <MenuItem onPress={logout}>Logout</MenuItem>
            </Menu>
        </View>
    );
};

export default UserAvatarMenu;
