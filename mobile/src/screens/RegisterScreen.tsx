import React, { useState } from 'react';
import tw from 'twrnc';
import { Text, View, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import CheckBox from '@react-native-community/checkbox';

import Input from 'src/components/inputs/Input';
import { useAuth } from 'src/contexts/AuthCtx';
import Spinner from 'src/components/common/Spinner';

type Props = {
    navigation: any;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [wantUpdates, setWantUpdates] = useState(false);
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();

    const registerHandler = async () => {
        if (
            !firstName ||
            !lastName ||
            !password ||
            !email ||
            !confirmPassword
        ) {
            return;
        }
        if (password !== confirmPassword) {
            return;
        }

        setLoading(true);
        try {
            await signUp({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <>
            <View
                style={tw.style(
                    `flex-1 items-center justify-center`,
                    loading && 'opacity-30'
                )}
            >
                <Icon color="#ab47bc" size={50} name="lock" />
                <Text style={tw`text-3xl`}>Sign up</Text>
                <Input
                    placeholder="First Name *"
                    value={firstName}
                    setValue={setFirstName}
                />
                <Input
                    placeholder="Last Name *"
                    value={lastName}
                    setValue={setLastName}
                />
                <Input
                    placeholder="Email *"
                    value={email}
                    setValue={setEmail}
                />
                <Input
                    placeholder="Password *"
                    secure={true}
                    value={password}
                    setValue={setPassword}
                />
                <Input
                    placeholder="Repeat Password *"
                    secure={true}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                />

                <View style={tw`w-4/5 flex-row mb-2`}>
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
                    disabled={loading}
                    onPress={registerHandler}
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
            {loading ? (
                <Modal
                    transparent={true}
                    animationType="none"
                    visible={loading}
                    style={tw`z-10`}
                >
                    <Spinner text="Creating account" />
                </Modal>
            ) : null}
        </>
    );
};

export default RegisterScreen;
