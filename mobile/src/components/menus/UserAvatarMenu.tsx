import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';

import tw from 'twrnc';

import { useAuth } from 'src/contexts/AuthCtx';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

const UserAvatarMenu = () => {
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    const { logout } = useAuth(0);

    const showMenuHandler = () => {
        setVisible(true);
    };

    const closeMenuHandler = () => {
        setVisible(false);
    };

    return (
        <View style={tw`-mr-2`}>
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
                <MenuItem onPress={() => navigation.navigate('Notifications')}>
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
