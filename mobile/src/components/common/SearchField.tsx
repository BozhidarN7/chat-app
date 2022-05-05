import React, { useState } from 'react';
import { TextInput, View, Keyboard, Button } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import tw from 'twrnc';

const SearchField = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [showCross, setShowCross] = useState(false);

    const deleteCloseHandler = () => {
        if (searchValue === '') {
            Keyboard.dismiss();
            setShowCross(false);
        } else {
            setSearchValue('');
        }
    };

    return (
        <View style={tw`w-4/5 right-4.5`}>
            <View
                style={tw`flex-1 w-full h-11  flex-row border-2 border-blue-500 rounded-3xl`}
            >
                <Feather
                    style={tw`text-pink-500 self-center mr-1 ml-2`}
                    name="search"
                    size={20}
                    // color="black"
                />
                <TextInput
                    style={tw`w-3/4`}
                    placeholder="Search..."
                    onChangeText={setSearchValue}
                    onFocus={() => setShowCross(true)}
                    value={searchValue}
                />
                {showCross ? (
                    <Entypo
                        style={tw`self-center`}
                        name="cross"
                        size={20}
                        color="black"
                        onPress={deleteCloseHandler}
                    />
                ) : null}
            </View>
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

export default SearchField;
