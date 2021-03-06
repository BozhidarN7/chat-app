import React, { RefObject } from 'react';
import { View, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

type Props = {
    messageBoxRef: RefObject<KeyboardAwareScrollView>;
    scrollToBottomButtonVisibility: boolean;
};

const ScrollToBottomButton = ({
    messageBoxRef,
    scrollToBottomButtonVisibility,
}: Props) => {
    const scrollToBottomHandler = () => {
        if (messageBoxRef && messageBoxRef.current) {
            messageBoxRef.current.scrollToEnd(true);
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
