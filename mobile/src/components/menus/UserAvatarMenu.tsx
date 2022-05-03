import React, { useState } from 'react';
import { Pressable, View, Image } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';

import tw from 'twrnc';

import { useAuth } from 'src/contexts/AuthCtx';

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
                        <View style={tw`w-11 h-11 rounded-full`}>
                            <Image
                                style={tw`w-11 h-11 rounded-full`}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                        </View>
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
