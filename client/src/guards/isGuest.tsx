import { Navigate } from 'react-router-dom';

import { useAuth } from 'contexts/AuthCtx';

const isGuest = (WrapperComponent: () => JSX.Element) => {
    const ComponentWrapper = (props: any) => {
        const { currentUser } = useAuth();

        if (currentUser) {
            return <Navigate to="/" replace={true} />;
        }

        return <WrapperComponent {...props} />;
    };

    return <ComponentWrapper />;
};

export default isGuest;
