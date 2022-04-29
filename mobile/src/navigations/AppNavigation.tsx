import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'src/screens/LoginScreen';
import RegisterScreen from 'src/screens/RegisterScreen';
import HomeScreen from 'src/screens/HomeScreen';
import { useAuth } from 'src/contexts/AuthCtx';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { isSignIn } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {isSignIn ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{
                                title: 'Login',
                                animationTypeForReplace: isSignIn
                                    ? 'push'
                                    : 'pop',
                            }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
