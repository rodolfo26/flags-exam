import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { RouterLink } from '../links';

const useStyles = makeStyles((theme) =>({
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        background: '#cfedfc',
        height: '100%'
    },
    sortButton: {
        border: '1px solid black',
        marginRight: theme.spacing(1),
    }
}));

export function HomePage(props) {
    const classes = useStyles();
    

    return (
        <Box display="flex" p={2}>
            <Box flexGrow={1}>

                <Paper className={classes.paper} height="100%">
                    <Typography variant="h5" component="h2" color="textPrimary" >
                        Looking for flags?
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        We have them all.
                    </Typography>
                    <RouterLink button path="/flags" text="View Flags" variant="contained" color="primary"/>
                </Paper>
            </Box>
        </Box>
    )
}
