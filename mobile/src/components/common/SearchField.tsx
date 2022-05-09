import React, { useState } from 'react';
import { TextInput, View, Keyboard, Button, Text } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

import tw from 'twrnc';

type Props = {
    searchValue: string;
    setSearchValueHandler: (query: string) => void;
};

const SearchField = ({ setSearchValueHandler, searchValue }: Props) => {
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
        <View style={tw`w-4/5 right-4.5`}>
            <View
                style={tw`flex-1 w-full h-11 flex-row border-2 border-blue-500 rounded-3xl`}
            >
                <Feather
                    style={tw`text-pink-500 self-center mr-1 ml-2`}
                    name="search"
                    size={20}
                />
                <TextInput
                    style={tw`w-3/4`}
                    placeholder="Search for recent chat..."
                    onChangeText={setSearchValueHandler}
                    onFocus={searchFieldFocusHandler}
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
        </View>
    );
};

export default SearchField;
