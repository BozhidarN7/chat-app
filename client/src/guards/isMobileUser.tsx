import { Navigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { useAuth } from 'contexts/AuthCtx';

const isMobileUser = (WrapperComponent: () => JSX.Element) => {
    const ComponentWrapper = (props: any) => {
        // const theme = useTheme();
        const isSmall = useMediaQuery((theme: any) =>
            theme.breakpoints.down('sm')
        );
        const { currentUser } = useAuth();
        console.log(isSmall);
        if (!currentUser) {
            return <Navigate to="/login" replace={true} />;
        }

        // if (!isSmall) {
        //     return <Navigate to="/chat" replace={true} />;
        // }
        return <WrapperComponent {...props} />;
    };

    return <ComponentWrapper />;
};

export default isMobileUser;
