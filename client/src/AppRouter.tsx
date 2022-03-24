import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
        </Routes>
    );
};

export default AppRouter;
