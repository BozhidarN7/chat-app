import { Navigate } from 'react-router-dom';

import { useAuth } from 'contexts/AuthCtx';

const isAdmin = (WrapperComponent: () => JSX.Element) => {
    const ComponentWrapper = (props: any) => {
        const { currentUser } = useAuth();

        if (!currentUser || !currentUser.roles.includes('admin')) {
            return <Navigate to="/chat" replace={true} />;
        }
        return <WrapperComponent {...props} />;
    };

    return <ComponentWrapper />;
};

export default isAdmin;
