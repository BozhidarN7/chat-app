import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useAuth } from 'contexts/AuthCtx';
import Copyright from 'components/common/Copyright';

const SignUpPage = () => {
    const navigate = useNavigate();

    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { signUp } = useAuth();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDisableSubmitBtn(true);
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        if (
            !firstName ||
            !lastName ||
            !password ||
            !confirmPassword ||
            !email
        ) {
            toast.info('Please fill the form');
            setDisableSubmitBtn(false);
            return;
        }

        if (password !== confirmPassword) {
            setDisableSubmitBtn(false);
            toast.info('Password mismatch');
            return;
        }

        const message = await signUp({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });

        if (message === 'Register failed') {
            setDisableSubmitBtn(false);
            toast.error(message);
            return;
        }

        toast.success(message);

        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
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
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
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
                                name="confirmPassword"
                                label="Repeat Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={disableSubmitBtn}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/login"
                                variant="body2"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
};

export default SignUpPage;
