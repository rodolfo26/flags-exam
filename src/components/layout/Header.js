import { Box, Grid } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { RouterLink } from '../links';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginButton: {
        background: theme.palette.primary.light
    },
    title: {
        flexGrow: 1,
    },
}));
export function Header(props) {
    const classes = useStyles();

    return (
        <Box>
            <div className={classes.root}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography variant="h5" color="textPrimary" className={classes.title}>
                            myflags.com
                        </Typography>
                        <nav>
                            <Grid container>
                                <Grid>
                                    <RouterLink button path="/home" text="Home"/>
                                </Grid>
                                <Grid>
                                    <RouterLink button path="/flags" text="Flags"/>
                                </Grid>
                                <Grid>
                                    <RouterLink button path="/home" text="Login" variant="contained" color="primary"/>
                                </Grid>
                            </Grid>
                        </nav>
                    </Toolbar>
                </AppBar>
            </div>
        </Box>
    )
}
