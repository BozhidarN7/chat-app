import { Navigate } from 'react-router-dom';

import { useAuth } from 'contexts/AuthCtx';
import useWindowDismensions from 'hooks/useWindowDismensions';

const isMobileUser = (WrapperComponent: () => JSX.Element) => {
    const ComponentWrapper = (props: any) => {
        const { width } = useWindowDismensions();
        const { currentUser } = useAuth();

        if (!width) return <Navigate to="/chat" replace={true} />;
        const isSmall = width < 600 ? true : false;

        if (!currentUser) {
            return <Navigate to="/login" replace={true} />;
        }

        if (!isSmall) {
            return <Navigate to="/chat" replace={true} />;
        }

        return <WrapperComponent {...props} />;
    };

    return <ComponentWrapper />;
};

export default isMobileUser;
