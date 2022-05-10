import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { useAppSelector } from '../../app/hooks';

type Props = {
    negativeTop: number | undefined;
    negativeRight: number | undefined;
    negativeBottom: number | undefined;
    negativeLeft: number | undefined;
    positiveTop: number | undefined;
    positiveRight: number | undefined;
    positiveBottom: number | undefined;
    positiveLeft: number | undefined;
};

const Badge = ({
    negativeTop,
    negativeRight,
    negativeBottom,
    negativeLeft,
    positiveTop,
    positiveRight,
    positiveBottom,
    positiveLeft,
}: Props) => {
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    return (
        <View
            style={tw.style(
                `absolute bg-pink-500 w-5 rounded-full h-5 z-10`,
                negativeTop !== undefined ? `-top-${negativeTop}` : '',
                negativeRight !== undefined ? `-right-${negativeRight}` : '',
                negativeBottom !== undefined ? `-bottom-${negativeBottom}` : '',
                negativeLeft !== undefined ? `-left-${negativeLeft}` : '',
                positiveTop !== undefined ? `top-${positiveTop}` : '',
                positiveRight !== undefined ? `right-${positiveRight}` : '',
                positiveBottom !== undefined ? `bottom-${positiveBottom}` : '',
                positiveLeft !== undefined ? `left-${positiveLeft}` : ''
            )}
        >
            <Text style={tw`text-white text-xs text-center`}>
                {newFriendShipRequests.length}
            </Text>
        </View>
    );
};

export default Badge;
