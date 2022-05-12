import React, { RefObject } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

type Props = {
    messageBoxRef: RefObject<ScrollView>;
    scrollToBottomButtonVisibility: boolean;
};

const ScrollToBottomButton = ({
    messageBoxRef,
    scrollToBottomButtonVisibility,
}: Props) => {
    const scrollToBottomHandler = () => {
        if (messageBoxRef && messageBoxRef.current) {
            messageBoxRef.current.scrollToEnd({ animated: true });
        }
    };
    return scrollToBottomButtonVisibility ? (
        <Pressable onPress={scrollToBottomHandler}>
            <View
                style={tw`w-11 h-11 absolute bottom-1 right-5 rounded-full z-20 rounded-full`}
            >
                <Ionicons
                    name="arrow-down-circle"
                    size={44}
                    style={tw`text-pink-500 rounded-full`}
                />
            </View>
        </Pressable>
    ) : null;
};

export default ScrollToBottomButton;
