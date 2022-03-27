import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthCtx';

const HomePage = () => {
    const { token, currentUser } = useAuth();
    useEffect(() => {
        console.log(token);
        console.log(currentUser);
    }, [token, currentUser]);
    return <div>Hello world</div>;
};

export default HomePage;
