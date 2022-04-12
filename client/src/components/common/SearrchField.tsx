import React, { useRef, useState } from 'react';
import { MutableRefObject } from 'react';
import { CSSTransition } from 'react-transition-group';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MatchingUsers from 'components/chat/MatchingUsers';

import 'components/chat/MatchingUsers.css';
import { filterUsers } from 'services/userService';
import { User } from 'interfaces/userInterfaces';
import { useAppSelector } from 'app/hooks';
import { useAuth } from 'contexts/AuthCtx';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
        },
    },
}));

type Props = {
    addFriendClicked: boolean;
    searchFieldRef: MutableRefObject<HTMLInputElement | undefined>;
    searchChatHandler: (query: string) => void;
};

const SearchField = ({
    addFriendClicked,
    searchFieldRef,
    searchChatHandler,
}: Props) => {
    const [searchValue, setSearchField] = useState('');
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);
    const matchingUsersRef = useRef(null);
    const users = useAppSelector((state) => state.users.users);
    const { currentUser } = useAuth();

    const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = e.target.value;
        if (addFriendClicked) {
            setSearchField(currentSearch);
            setMatchedUsers(filterUsers(users, currentSearch, currentUser!.id));
        } else {
            searchChatHandler(currentSearch);
            setSearchField(currentSearch);
        }
    };

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    value={searchValue}
                    onChange={searchHandler}
                    inputRef={searchFieldRef}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>

            <CSSTransition
                in={addFriendClicked}
                timeout={300}
                unmountOnExit
                classNames="alert"
                nodeRef={matchingUsersRef}
            >
                <MatchingUsers
                    searchValue={searchValue}
                    matchingUsersRef={matchingUsersRef}
                    matchedUsers={matchedUsers}
                />
            </CSSTransition>
        </>
    );
};

export default SearchField;
