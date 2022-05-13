import * as crud from 'src/api/crud';
import routes from 'src/api/apiRoutes';
import * as SecureStroe from 'expo-secure-store';

export const sendFile = async (roomId: string, formData: FormData) => {
    const token = await SecureStroe.getItemAsync('token');

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    };

    const res = await fetch(routes.sendFileURL(roomId), options);
    return await res.json();
};
