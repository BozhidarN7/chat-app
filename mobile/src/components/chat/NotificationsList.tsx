import React from 'react';
import { View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import tw from 'twrnc';

import Avatar from '../common/Avatar';
import { useAppSelector } from '../../app/hooks';

const NotificationsList = () => {
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    return (
        <>
            {newFriendShipRequests.map((fr) => (
                <View style={tw`flex flex-row pl-3 py-2`} key={fr.friendshipId}>
                    <View style={tw`mr-2`}>
                        <Avatar size={11} />
                    </View>
                    <View>
                        <Text style={tw`text-base text-black`}>
                            Ivan Ivanov
                        </Text>
                        <Text>Please add me to your friend's list</Text>
                    </View>
                    <View style={tw`ml-auto mr-4`}>
                        <Ripple>
                            <Text style={tw`text-base text-blue-500`}>
                                Accept
                            </Text>
                        </Ripple>
                        <Ripple>
                            <Text style={tw`text-base text-blue-500`}>
                                Reject
                            </Text>
                        </Ripple>
                    </View>
                </View>
            ))}
        </>
    );
};

export default NotificationsList;
