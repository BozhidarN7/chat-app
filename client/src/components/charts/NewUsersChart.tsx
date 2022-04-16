import { useEffect, useState } from 'react';

import {
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    Chart,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import Paper from '@mui/material/Paper';

import { getNewlyRegisterUsers } from 'services/adminService';
import Spinner from 'components/common/Spinner';

const NewUsersChart = () => {
    const [statistic, setStatistic] = useState(null);

    useEffect(() => {
        let isMounted = true;
        getNewlyRegisterUsers().then((data) => {
            if (isMounted) {
                setStatistic(
                    data.data.users.map((u: any) => {
                        const date = new Date(u.date);
                        return {
                            ...u,
                            date: `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${
                                date.getMonth() < 9 ? '0' : ''
                            }${date.getMonth() + 1}`,
                        };
                    })
                );
            }
        });
        return () => {
            isMounted = false;
            setStatistic(null);
        };
    }, []);

    if (!statistic) {
        return <Spinner />;
    }

    return (
        <Paper>
            <Chart data={statistic!}>
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="totalUsers" argumentField="date" />

                <Title text="New users registered per day (last 7 days)" />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    );
};

export default NewUsersChart;
