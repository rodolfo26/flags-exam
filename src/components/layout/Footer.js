import { Box, Grid } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { RouterLink } from '../links';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#334D5A",
        color: '#ffffff'
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff',
        marginBottom: theme.spacing(3)
    }
}));
export function Footer(props) {
    const classes = useStyles();

    return (
        <Box p={2} className={classes.container}>
            <Box mb={3}>
                <Typography variant="h6">
                    myflags.com
                </Typography>
            </Box>
            <Box>
                <RouterLink className={classes.link} path="/home" text="Home" />
            </Box>
            <Box mb={3}>
                <RouterLink className={classes.link} path="/flags" text="Flags" />
            </Box>
            <Box>&copy; 2020 myflags.com</Box>
        </Box>
    )
}
