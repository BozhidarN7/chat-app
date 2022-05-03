import React, {
    useState,
    useLayoutEffect,
    useRef,
    useEffect,
    LegacyRef,
} from 'react';
import {
    Text,
    View,
    DrawerLayoutAndroid,
    Button,
    Dimensions,
    DrawerLayoutAndroidProps,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import tw from 'twrnc';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const HomeScreen = ({ navigation }: Props) => {
    const drawer = useRef(undefined);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (!drawer.current) return;
        console.log(isDrawerOpen);
        if (isDrawerOpen) {
            drawer.current.openDrawer();
        } else {
            drawer.current.closeDrawer();
        }
    }, [isDrawerOpen]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <UserAvatarMenu />,
            headerLeft: () => (
                <Entypo
                    onPress={() => setIsDrawerOpen((prev) => !prev)}
                    name="menu"
                    size={36}
                    color="black"
                />
            ),
        });
    }, [navigation]);

    const navigationView = () => (
        <View>
            <Text>I'm in the Drawer!</Text>
            <Button title="Close drawer" />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition="left"
            renderNavigationView={navigationView}
        ></DrawerLayoutAndroid>
    );
};

export default HomeScreen;
