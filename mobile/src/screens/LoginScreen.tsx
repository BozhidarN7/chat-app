import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
import Ripple from 'react-native-material-ripple';
import { View, Text, Pressable, ActivityIndicator, Modal } from 'react-native';

import Input from 'src/components/inputs/Input';
import Spinner from 'src/components/common/Spinner';
import { useAuth } from 'src/contexts/AuthCtx';

type Props = {
    navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    const loginHandler = async () => {
        if (!email || !password) {
            return;
        }
        setLoading(true);

        try {
            await signIn({ email, password });
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
                <Text style={tw`text-3xl`}>Sign in</Text>
                <Input
                    value={email}
                    setValue={setEmail}
                    placeholder="Email"
                    secure={false}
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    placeholder="Password"
                    secure={true}
                />

                <Ripple
                    style={tw`w-4/5 bg-blue-500 py-2 shadow-md rounded-md`}
                    rippleDuration={600}
                    rippleSize={500}
                    rippleSequential={true}
                    rippleCentered={true}
                    onPress={loginHandler}
                    disabled={loading}
                >
                    <Text style={tw`text-white text-center uppercase`}>
                        Sign in
                    </Text>
                </Ripple>
                <Pressable>
                    <Text style={tw`text-blue-500 underline py-2`}>
                        Forgot password?
                    </Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={tw`text-blue-500 underline`}>
                        Don't have an account? Sign Up
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
                    <Spinner text="Login in" />
                </Modal>
            ) : null}
        </>
    );
};

export default LoginScreen;
