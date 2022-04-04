import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

type Props = {
    modalMessage: string;
    openConfirmModal: boolean;
    confirmHandler: () => void;
    closeConfirmModalHandler: () => void;
};

const ConfirmModal = ({
    modalMessage,
    openConfirmModal,
    closeConfirmModalHandler,
    confirmHandler,
}: Props) => {
    return (
        <Modal
            aria-labelledby="confirm-modal"
            aria-describedby="are-you-sure-with-this-action"
            open={openConfirmModal}
            onClose={closeConfirmModalHandler}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openConfirmModal}>
                <Box sx={style}>
                    <Grid container flexDirection="column" alignItems="center" spacing={2}>
                        <Grid item xs={true} sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h2">
                                {modalMessage}
                            </Typography>
                        </Grid>
                        <Grid item xs={true}>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ mr: 2 }}
                                onClick={confirmHandler}
                            >
                                Confirm
                            </Button>
                            <Button variant="contained" color="error" onClick={closeConfirmModalHandler}>
                                Decline
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ConfirmModal;
