import React, { useState } from 'react';
import tw from 'twrnc';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import CheckBox from '@react-native-community/checkbox';

import Input from 'src/components/common/inputs/Input';

type Props = {
    navigation: any;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [wantUpdates, setWantUpdates] = useState(false);
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Icon color="#ab47bc" size={50} name="lock" />
            <Text style={tw`text-3xl`}>Sign up</Text>
            <Input placeholder="First Name *" />
            <Input placeholder="Last Name *" />
            <Input placeholder="Email *" />
            <Input placeholder="Password *" />
            <Input placeholder="Repeat Password *" />

            <View style={tw`w-4/5 flex-row mb-4`}>
                <CheckBox
                    style={tw`border-2`}
                    value={wantUpdates}
                    onValueChange={() => setWantUpdates((prev) => !prev)}
                />
                <Text style={tw`self-center`}>
                    I want to receive updates via email.
                </Text>
            </View>

            <Ripple
                style={tw`w-4/5 bg-blue-500 py-2 shadow-md rounded-md`}
                rippleDuration={600}
                rippleSize={500}
                rippleSequential={true}
                rippleCentered={true}
            >
                <Text style={tw`text-white text-center uppercase`}>
                    Sign in
                </Text>
            </Ripple>

            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={tw`text-blue-500 underline py-2`}>
                    Already have an account? Sign in
                </Text>
            </Pressable>
        </View>
    );
};

export default RegisterScreen;
