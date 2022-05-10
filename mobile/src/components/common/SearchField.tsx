import React, { useState } from 'react';
import { TextInput, View, Keyboard, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import tw from 'twrnc';

type Props = {
    placeholder: string;
    searchValue: string;
    setSearchValueHandler: (query: string) => void;
};

const SearchField = ({
    setSearchValueHandler,
    placeholder,
    searchValue,
}: Props) => {
    const [showCross, setShowCross] = useState(false);

    const deleteCloseHandler = () => {
        if (searchValue === '') {
            Keyboard.dismiss();
            setShowCross(false);
        } else {
            setSearchValueHandler('');
        }
    };

    const searchFieldFocusHandler = () => {
        setShowCross(true);
    };

    return (
        <View style={tw`w-3/4`}>
            <View
                style={tw`flex w-full h-11 flex-row border-2 border-blue-500 rounded-3xl`}
            >
                <Ionicons
                    style={tw`text-pink-500 self-center mr-1 ml-2`}
                    name="search-outline"
                    size={20}
                />
                <TextInput
                    style={tw`w-3/4`}
                    placeholder={placeholder}
                    onChangeText={setSearchValueHandler}
                    onFocus={searchFieldFocusHandler}
                    value={searchValue}
                />
                {showCross ? (
                    <Ionicons
                        style={tw`self-center`}
                        name="close"
                        size={20}
                        color="black"
                        onPress={deleteCloseHandler}
                    />
                ) : null}
            </View>
        </View>
    );
};

export default SearchField;
