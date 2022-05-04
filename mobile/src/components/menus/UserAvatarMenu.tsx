import React, { useState } from 'react';
import { Pressable, View, Image } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';

import tw from 'twrnc';

import { useAuth } from 'src/contexts/AuthCtx';
import Avatar from '../common/Avatar';

const UserAvatarMenu = () => {
    const [visible, setVisible] = useState(false);

    const { logout } = useAuth(0);

    const showMenuHandler = () => {
        setVisible(true);
    };

    const closeMenuHandler = () => {
        setVisible(false);
    };

    return (
        <View>
            <Menu
                visible={visible}
                anchor={
                    <Pressable onPress={showMenuHandler}>
                        <Avatar size={11} />
                    </Pressable>
                }
                onRequestClose={closeMenuHandler}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Notifications</MenuItem>
                <MenuItem onPress={logout}>Logout</MenuItem>
            </Menu>
        </View>
    );
};

export default UserAvatarMenu;
