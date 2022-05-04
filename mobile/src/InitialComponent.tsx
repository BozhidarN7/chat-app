import React, { useEffect } from 'react';

import { useAppDispatch } from './app/hooks';
import { useAuth } from './contexts/AuthCtx';
import { fetchChats } from './features/chatsSlice';
import AppNavigation from './navigations/AppNavigation';

const InitialComponent = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAuth();
    useEffect(() => {
        (async () => {
            if (currentUser) {
                dispatch(fetchChats(currentUser.id));
            }
        })();
    });

    return <AppNavigation />;
};

export default InitialComponent;
