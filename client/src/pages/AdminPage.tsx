import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ArgumentAxis, ValueAxis, Chart, LineSeries } from '@devexpress/dx-react-chart-material-ui';

import Header from 'components/header/Header';
import MessagesChart from 'components/charts/MessagesChart';
import NewUsersChart from 'components/charts/NewUsersChart';
import UsersWithMostMessagesChart from 'components/charts/UsersWithMostMessagesChart';

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
];

const AdminPage = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <MessagesChart />
                    </Grid>
                    <Grid item xs={6}>
                        <NewUsersChart />
                    </Grid>
                    <Grid item xs={6}>
                        <UsersWithMostMessagesChart />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <LineSeries valueField="value" argumentField="argument" />
                            </Chart>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AdminPage;
