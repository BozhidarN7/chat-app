import { makeStyles } from '@mui/styles';

import image from 'assets/images/landingImage.jpg';
import LandingPageHeader from 'components/landingPage/LandingPageHeader';

const useStyles = makeStyles((theme: any) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

const LandingPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LandingPageHeader />
        </div>
    );
};

export default LandingPage;
