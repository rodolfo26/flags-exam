import React from 'react'
import {
    Route, //
    Redirect, //
} from "react-router-dom";
import { FlagsPage, HomePage } from '../pages'


import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    body: {
        overflowY: "scroll",
        overflowX: 'hidden'
    },
}));

export function Body(props) {

    const classes = useStyles();    

    return (
        <Box flexGrow={1} className={classes.body}>
            {/* <main> */}
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />
                <Route path="/flags" component={FlagsPage} />
            {/* </main> */}
        </Box>
    )
}
