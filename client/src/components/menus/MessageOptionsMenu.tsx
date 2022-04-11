import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
    anchorEl: null | HTMLElement;
    openMessageOptionsMenu: boolean;
    closeMessageOptionsMenuHandler: (action: string) => void;
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
            <MenuItem
                onClick={closeMessageOptionsMenuHandler.bind(null, 'copy')}
            >
                Copy
            </MenuItem>
            <MenuItem
                onClick={closeMessageOptionsMenuHandler.bind(null, 'edit')}
            >
                Edit
            </MenuItem>
            <MenuItem
                onClick={closeMessageOptionsMenuHandler.bind(null, 'delete')}
            >
                Delete
            </MenuItem>
        </Menu>
    );
};

export default MessageOptionsMenu;
