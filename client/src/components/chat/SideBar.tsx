import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const messages = [
    {
        id: 1,
        primary: 'Ivan Ivanov',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    },
    {
        id: 2,
        primary: 'Peter Georgiev',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    },
    {
        id: 3,
        primary: 'Marin Manolov',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    },
    {
        id: 4,
        primary: 'Ivet Spasova',
        secondary: 'I have the tickets to the ReactConf for this year.',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    },
    {
        id: 6,
        primary: 'Dimitar Trifonov',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    },
    {
        id: 7,
        primary: 'Nikolay Bogdanov',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const SideBar = () => {
    const theme = useTheme();
    return (
        <>
            <Paper square sx={{ height: '100%' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Chats
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ color: theme.palette.primary.main }}
                                    primary={primary}
                                    secondary={secondary}
                                />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </>
    );
};

export default SideBar;