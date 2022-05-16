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

export const deleteMessage = async (
    messageId: string,
    userId: string,
    type: string
) => {
    return await crud.del(routes.deleteMessageURL(messageId, userId, type));
};

export const editMessage = async (
    messageId: string,
    userId: string,
    data: any
) => {
    // return await crud.put(routes.editMessageURL(messageId, userId), data);
    const token = await SecureStroe.getItemAsync('token');

    const options = {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(routes.editMessageURL(messageId, userId), options);
    return await res.json();
};
