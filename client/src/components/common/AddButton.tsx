import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { SxProps, Theme } from '@mui/material';

type Props = {
    styles: SxProps<Theme>;
    addFriendClicked: boolean;
    addFriendHandler: () => void;
};

const AddButton = ({ styles, addFriendHandler, addFriendClicked }: Props) => {
    return (
        <IconButton
            onClick={() => addFriendHandler()}
            color="secondary"
            sx={{ ...styles }}
        >
            {!addFriendClicked ? (
                <AddCircleOutlinedIcon sx={{ fontSize: 40 }} />
            ) : (
                <CloseOutlinedIcon sx={{ fontSize: 40 }} />
            )}
        </IconButton>
    );
};

export default AddButton;
