import React, { useState } from 'react';
import { View, TextInput, PermissionsAndroid } from 'react-native';
import {
    ImagePickerResponse,
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

import { useChat } from '../../contexts/ChatCtx';
import { useAuth } from '../../contexts/AuthCtx';
import { sendFile } from '../../services/messageService';

type Props = {
    roomId: string;
};

const MessageInput = ({ roomId }: Props) => {
    const [message, setMessage] = useState('');

    const { currentUser } = useAuth();
    const { sendMessage } = useChat();

    const sendMessageHandler = () => {
        if (message.trim() === '') {
            return;
        }

        sendMessage(roomId, message);
        setMessage('');
    };

    const openCameraHandler = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera',
                    buttonNeutral: 'Asl me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'Ok',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const result = await launchCamera({ mediaType: 'photo' });

                const formData = extractFile(result);
                await sendFile(roomId, formData);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const openGalleryHandler = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                includeBase64: false,
                selectionLimit: 1,
            });

            const formData = extractFile(result);

            if (formData) await sendFile(roomId, formData);
        } catch (err) {
            console.log(err);
        }
    };

    const extractFile = (result: ImagePickerResponse) => {
        if (result.assets) {
            const file = result.assets[0];

            const formData = new FormData();
            formData.append('file', {
                uri: file.uri,
                name: file.fileName,
                size: file.fileSize,
                type: file.type,
            });
            formData.append('senderFullName', currentUser.fullName);
            formData.append('senderId', currentUser.id);

            return formData;
        }
        return null;
    };

    return (
        <View>
            <View style={tw`w-full absolute bottom-0 relative border-t`}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={tw`w-5/6 p-2`}
                    placeholder="Type a message..."
                    multiline={true}
                />
                <View style={tw`flex flex-row pl-2 pb-1`}>
                    <Ionicons
                        onPress={openGalleryHandler}
                        name="images"
                        size={22}
                        style={[tw`text-blue-500 mr-4`]}
                    />
                    <Ionicons
                        onPress={openCameraHandler}
                        name="camera"
                        size={22}
                        style={[tw`text-blue-500 mr-4`]}
                    />
                </View>
                <Ionicons
                    onPress={sendMessageHandler}
                    name="send"
                    size={26}
                    style={[tw`absolute right-1 top-5 text-blue-500`]}
                />
            </View>
        </View>
    );
};

export default MessageInput;
