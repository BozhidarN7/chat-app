import * as authService from 'services/authService';

type TokenProps = {
    token: string;
    expiration: Date;
    refreshToken: string;
};

const inMemoryJwtManager = () => {
    let token: string | null = null;
    let refreshToken: string | null = null;
    let expiration: Date;
    let refreshTimeoutId: number;
    const storageKey = 'logout';

    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            token = null;
        }
    });

    const refreshTokenHandler = () => {
        const delay = new Date(expiration).getTime() - new Date().getTime();
        const timeoutTrigger = delay - 5000;

        refreshTimeoutId = window.setTimeout(async () => {
            await authService.refreshToken({
                accessToken: token!,
                refreshToken: refreshToken!,
            });
        }, timeoutTrigger);
    };

    const abortRefreshToken = () => {
        if (refreshTimeoutId) {
            window.clearTimeout(refreshTimeoutId);
        }
    };

    const getToken = () => token;

    const setToken = (data: TokenProps) => {
        token = data.token;
        refreshToken = data.refreshToken;
        expiration = data.expiration;

        refreshTokenHandler();
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expiration', expiration.toString());

        return true;
    };

    const deleteToken = () => {
        token = null;
        refreshToken = null;
        abortRefreshToken();
        localStorage.setItem(storageKey, Date.now().toString());
        return true;
    };

    return { setToken, getToken, deleteToken };
};

export default inMemoryJwtManager();
