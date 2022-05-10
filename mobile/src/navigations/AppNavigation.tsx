import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from 'src/screens/LoginScreen';
import RegisterScreen from 'src/screens/RegisterScreen';
import { useAuth } from 'src/contexts/AuthCtx';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { isSignIn } = useAuth();

    return (
        <NavigationContainer>
            {isSignIn ? (
                <>
                    <Stack.Navigator initialRouteName="Chat">
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                headerShown: false,
                                headerTitleAlign: 'center',
                                headerTitleStyle: tw`text-base`,
                            }}
                        />
                    </Stack.Navigator>
                </>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            title: 'Login',
                            animationTypeForReplace: isSignIn ? 'push' : 'pop',
                        }}
                    />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default AppNavigation;
