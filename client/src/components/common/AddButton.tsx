import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

type Props = {
    styles: any;
};

const AddButton = ({ styles }: Props) => {
    return (
        <IconButton color="secondary" sx={{ ...styles, ml: 'auto' }}>
            <AddCircleOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
    );
};

export default AddButton;
