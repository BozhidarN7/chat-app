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

import { getUsersWithMostMessages } from 'services/adminService';
import Spinner from 'components/common/Spinner';

const UsersWithMostMessagesChart = () => {
    const [statistic, setStatistic] = useState(null);

    useEffect(() => {
        getUsersWithMostMessages().then((data) => {
            setStatistic(
                data.data.users.map((u: any) => {
                    const date = new Date(u.date);
                    return {
                        ...u,
                        date: `${
                            date.getDate() < 10 ? '0' : ''
                        }${date.getDate()}/${date.getMonth() < 9 ? '0' : ''}${
                            date.getMonth() + 1
                        }`,
                    };
                })
            );
        });
        return () => {
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

                <BarSeries
                    valueField="totalMessages"
                    argumentField="fullName"
                />

                <Title text="Users with most messages sent (top 7 users)" />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    );
};

export default UsersWithMostMessagesChart;
