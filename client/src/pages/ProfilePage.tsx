import Container from '@mui/material/Container';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import Header from 'components/header/Header';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { profileImageChanged } from 'features/usersSlice';
import { saveUserProfileImage as saveUserProfileImageAPI } from 'services/userService';
import { useAuth } from 'contexts/AuthCtx';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    const [photo, setPhoto] = useState<File | null>();
    const [oldPassword, setOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const profileImage = useAppSelector((state) => state.users.profileImage);
    const { currentUser } = useAuth();

    const changeFileHandler = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files) {
            const file = e.target.files[0];

            setPhoto(file);
        }
    };

    const savePhotoHandler = async () => {
        if (photo) {
            const formData = new FormData();
            formData.append('photo', photo);
            const data = await saveUserProfileImageAPI(
                currentUser?.id!,
                formData
            );

            dispatch(profileImageChanged(data.data.profileImage));

            toast.success('Profile image save successfully');
        } else {
            toast.error('Profile image did not saved!');
        }
    };

    return (
        <>
            <Header />
            <Container sx={{ mt: 2 }} maxWidth="md">
                <Typography
                    sx={{ textAlign: 'center', mb: 2 }}
                    variant="h3"
                    component="h1"
                >
                    Profile info
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        <Box>
                            {profileImage ? (
                                <img
                                    src={`data:image/jpeg;base64,${profileImage}`}
                                    alt=""
                                    style={{ width: '227px', height: '227px' }}
                                />
                            ) : (
                                <AccountBoxIcon
                                    sx={{
                                        width: '200px',
                                        height: '200px',
                                        p: 0,
                                        m: 0,
                                    }}
                                />
                            )}
                        </Box>
                        <InputBase
                            id="file-upload"
                            onChange={changeFileHandler.bind(this)}
                            type="file"
                            sx={{ display: 'none' }}
                        />
                        <Button variant="contained">
                            <InputLabel
                                sx={{ cursor: 'pointer', color: 'white' }}
                                htmlFor="file-upload"
                            >
                                Upload image
                            </InputLabel>
                        </Button>
                        <Button
                            sx={{ ml: 2 }}
                            variant="contained"
                            onClick={savePhotoHandler}
                        >
                            Save
                        </Button>
                    </Grid>
                    <Grid component="form" container item xs={6} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="oldPassword"
                                label="Old Password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setOldPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                {oldPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="newPassword"
                                label="New Password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmNewPassword"
                                label="Repeat New Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Edit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ProfilePage;
