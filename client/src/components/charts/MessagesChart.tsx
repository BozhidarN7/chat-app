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

import { getMessagesStatistic } from 'services/adminService';
import Spinner from 'components/common/Spinner';

const MessagesChart = () => {
    const [statistic, setStatistic] = useState(null);

    useEffect(() => {
        getMessagesStatistic().then((data) => {
            setStatistic(
                data.data.messages.map((s: any) => {
                    const date = new Date(s.date);
                    return {
                        ...s,
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

                <BarSeries valueField="totalMessages" argumentField="date" />

                <Title text="Total messages sent per day (last 7 days)" />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    );
};

export default MessagesChart;
