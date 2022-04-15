import { Routes, Route } from 'react-router-dom';

import isLogged from 'guards/isLogged';
import isGuest from 'guards/isGuest';
import isAdmin from 'guards/isAdmin';
import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import ProfilePage from 'pages/ProfilePage';
import AdminPage from 'pages/AdminPage';
import LandingPage from 'pages/LandingPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={isGuest(LandingPage)} />
            <Route path="/chat" element={isLogged(HomePage)} />
            <Route path="/profile" element={isLogged(ProfilePage)} />
            <Route path="/login" element={isGuest(SignInPage)} />
            <Route path="/register" element={isGuest(SignUpPage)} />
            <Route path="/dashboard" element={isAdmin(AdminPage)} />
        </Routes>
    );
};

export default AppRouter;
