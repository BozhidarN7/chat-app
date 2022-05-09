import React from 'react';
import { View, Text, ScrollView, Modal, Pressable } from 'react-native';
import Ripple from 'react-native-material-ripple';
import tw from 'twrnc';

type Props = {
    text: string;
    isConfirmModalOpen: boolean;
    closeConfirmModalHandler: () => void;
    acceptHandler: () => void;
};

const ConfirmModal = ({
    text,
    isConfirmModalOpen,
    closeConfirmModalHandler,
    acceptHandler,
}: Props) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isConfirmModalOpen}
        >
            <View style={tw`flex-1 justify-center items-center`}>
                <View style={tw`w-5/6 p-2 shadow-black bg-white rounded-lg`}>
                    <Text style={tw`text-base text-center text-black`}>
                        {text}
                    </Text>
                    <View style={tw`flex flex-row self-center py-2`}>
                        <Ripple
                            style={tw`py-2 bg-green-600 w-20 mr-2`}
                            onPress={acceptHandler}
                        >
                            <Text
                                style={tw`text-base text-center text-white rounded`}
                            >
                                Accept
                            </Text>
                        </Ripple>
                        <Ripple
                            style={tw`py-2 bg-red-600 w-20`}
                            onPress={closeConfirmModalHandler}
                        >
                            <Text
                                style={tw`text-base text-center text-white rounded`}
                            >
                                Reject
                            </Text>
                        </Ripple>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmModal;
