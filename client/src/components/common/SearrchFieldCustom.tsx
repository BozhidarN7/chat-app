import { useRef } from 'react';
import { MutableRefObject } from 'react';
import { CSSTransition } from 'react-transition-group';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import MatchingUsers from 'components/chat/MatchingUsers';

import 'components/chat/MatchingUsers.css';

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
};

const SearchFieldCustom = ({ addFriendClicked, searchFieldRef }: Props) => {
    const matchingUsersRef = useRef(null);

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
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
                <MatchingUsers matchingUsersRef={matchingUsersRef} />
            </CSSTransition>
        </>
    );
};

export default SearchFieldCustom;
