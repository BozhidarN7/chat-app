import { Routes, Route } from 'react-router-dom';

import isLogged from 'guards/isLogged';
import isGuest from 'guards/isGuest';
import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import ProfilePage from 'pages/ProfilePage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={isLogged(HomePage)} />
            <Route path="/profile" element={isLogged(ProfilePage)} />
            <Route path="/login" element={isGuest(SignInPage)} />
            <Route path="/register" element={isGuest(SignUpPage)} />
        </Routes>
    );
};

export default AppRouter;
