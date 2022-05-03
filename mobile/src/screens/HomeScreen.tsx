import React, { useState, useLayoutEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { NavigationScreenProp } from 'react-navigation';
import tw from 'twrnc';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const HomeScreen = ({ navigation }: Props) => {
    const [visible, setVisible] = useState(false);

    const showMenuHandler = () => {
        console.log('here');
        setVisible(true);
    };

    const closeMenuHandler = () => {
        setVisible(false);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <UserAvatarMenu />,
        });
    }, [navigation]);

    return (
        <View style={tw`h-full w-full`}>
            <Menu
                visible={visible}
                anchor={<Text onPress={showMenuHandler}>Show menu</Text>}
                onRequestClose={closeMenuHandler}
            >
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuDivider />
                <MenuItem>Menu Item 1</MenuItem>
            </Menu>
        </View>
    );
};

export default HomeScreen;
