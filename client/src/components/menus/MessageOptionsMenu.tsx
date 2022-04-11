import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
    anchorEl: null | HTMLElement;
    openMessageOptionsMenu: boolean;
    closeMessageOptionsMenuHandler: () => void;
};

const MessageOptionsMenu = ({
    anchorEl,
    openMessageOptionsMenu,
    closeMessageOptionsMenuHandler,
}: Props) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={openMessageOptionsMenu}
            onClose={closeMessageOptionsMenuHandler}
        >
            <MenuItem onClick={closeMessageOptionsMenuHandler}>Copy</MenuItem>
            <MenuItem onClick={closeMessageOptionsMenuHandler}>Edit</MenuItem>
            <MenuItem onClick={closeMessageOptionsMenuHandler}>Delete</MenuItem>
        </Menu>
    );
};

export default MessageOptionsMenu;
