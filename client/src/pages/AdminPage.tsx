import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import Header from 'components/header/Header';

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
];

const data1 = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.44 },
    { year: '1990', population: 5.31 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.93 },
];

const AdminPage = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography sx={{ m: 2 }} variant="h6">
                                User statistics
                            </Typography>
                            <Chart data={data1}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <BarSeries
                                    valueField="population"
                                    argumentField="year"
                                />
                                <Title text="World population" />
                                <Animation />
                            </Chart>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography sx={{ m: 2 }} variant="h6">
                                User statistics
                            </Typography>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <LineSeries
                                    valueField="value"
                                    argumentField="argument"
                                />
                            </Chart>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ m: 2 }} variant="h6">
                            User statistics
                        </Typography>
                        <Paper>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <LineSeries
                                    valueField="value"
                                    argumentField="argument"
                                />
                            </Chart>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ m: 2 }} variant="h6">
                            User statistics
                        </Typography>
                        <Paper>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />

                                <LineSeries
                                    valueField="value"
                                    argumentField="argument"
                                />
                            </Chart>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AdminPage;
