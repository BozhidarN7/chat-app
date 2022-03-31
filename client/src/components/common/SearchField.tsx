import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { CurrentUser } from 'interfaces/userInterfaces';
import { getAllUsers } from 'services/userService';
import { useChat } from 'contexts/ChatCtx';
import { useAuth } from 'contexts/AuthCtx';

const SearchField = () => {
    const [users, setUsers] = useState<CurrentUser[]>([]);

    const { connection } = useChat();
    const { currentUser } = useAuth();

    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data.data.users);
        });
        return () => {
            setUsers([]);
        };
    }, []);

    const selectUserHandler = async (e: React.SyntheticEvent) => {
        await connection?.invoke(
            'AddToFriends',
            e.currentTarget.textContent,
            currentUser?.id
        );
    };

    return (
        <Autocomplete
            onChange={selectUserHandler}
            disablePortal
            id="combo-box-demo"
            options={users.map((user) => {
                return {
                    label: `${user.firstName} ${user.lastName}`,
                    // key: user.id,
                };
            })}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label="Find people" />
            )}
        />
    );
};

export default SearchField;
