import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export const get = async (url: string) => {
    if (!url) throw new Error('Invalid params in crud.get()');

    const options = await getOptions();
    return await axios.get(url, { ...options });
};

export const post = async (url: string, data: any) => {
    if (!url) throw new Error('Invalid params in crud.post()');

    const options = await getOptions();
    return await axios.post(url, { ...options, ...data });
};

export const put = async (url: string, data: any) => {
    if (!url || !data) throw new Error('Invalid params in crud.put()');

    const options = await getOptions();
    return await axios.put(url, { ...options, ...data });
};

export const patch = async (url: string, data: any) => {
    if (!url || !data) throw new Error('Invalid params in crud.patch()');

    const options = await getOptions();
    return await axios.patch(url, { ...options, ...data });
};

export const del = async (url: string) => {
    if (!url) throw new Error('Invalid params in crud.del()');

    const options = await getOptions();
    return await axios.delete(url, { ...options });
};

const getOptions = async () => {
    const token = await SecureStore.getItemAsync('token');
    const options: any = {
        headers: {},
    };

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return options;
};
