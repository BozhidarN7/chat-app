import { toast } from 'react-toastify';

export const request = async (url: string, options: any) => {
    try {
        if (!url || !options?.method) {
            throw new Error('Bad request');
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const message = await response.json();
            throw new Error(message.message);
        }
        const data = await response.json();
        return data;
    } catch (err: any) {
        toast.error(err.message);
        return err.message;
    }
};

export const getOptions = async (method = 'get', body: any = undefined) => {
    // const idToken = await getUserToken();

    const options: any = {
        method,
        headers: {
            // Origin: 'http://localhost:3000/',
        },
    };

    // if (idToken) {
    //     options.headers['X-Authorization'] = idToken;
    // }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
};

// export const getUserToken = () => {
//     const currentUser = auth.currentUser;

//     if (!currentUser) return null;

//     return currentUser.getIdToken(true);
// };