import React from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

type Props = {
    roomId: string | undefined;
    changeFileHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadFileButton = ({ roomId, changeFileHandler }: Props) => {
    return (
        <InputAdornment position="end">
            <IconButton disabled={roomId ? false : true}>
                <InputLabel sx={{ cursor: 'pointer' }} htmlFor="file-upload">
                    <DriveFolderUploadIcon />
                </InputLabel>
            </IconButton>
            <InputBase
                id="file-upload"
                onChange={changeFileHandler.bind(this)}
                type="file"
                sx={{ display: 'none' }}
            />
        </InputAdornment>
    );
};

export default UploadFileButton;
