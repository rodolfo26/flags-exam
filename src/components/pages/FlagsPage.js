import React, { useState, useEffect } from 'react'
import { Grid, Typography, Box, Button, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Flag } from './Flag';

import { useCountryService } from '../../hooks';

const useStyles = makeStyles((theme) =>({
    sortButton: {
        border: '1px solid black',
        marginRight: theme.spacing(1),
    }
}));

export function FlagsPage(props) {

    const classes = useStyles();
    const [ scroll, search, state, dispatch ] = useCountryService();

    const [ page, setPage ] = useState(0);

    useEffect(() => {
        search((response) => dispatch({ type: 'SUCCESS', payload: response }),
            () => dispatch({ type: 'ERROR' })
        );
    }, [state.sorting]);

    const scrollPage = () => {

    }

    return (
        <Box>
            <Box p={2}>
                <Box>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        All Flags
                    </Typography>
                </Box>
                <Box>
                    <Button color="inherit" onClick={() => dispatch({ type: 'CHANGE_SORTING', value: 'name_asc' })} className={classes.sortButton}>A - Z</Button>
                    <Button color="inherit" onClick={() => dispatch({ type: 'CHANGE_SORTING', value: 'name_desc' })} className={classes.sortButton}>Z - A</Button>
                </Box>
            </Box>
            <Box display="flex" p={2} justifyContent="center" alignContent="center">
                {
                    state.loading ?
                    <Box>
                        <CircularProgress />
                    </Box>
                    :<Grid container spacing={5}>
                        {
                            state.countries.map(country =>
                                <Flag country={country}/>
                            )
                        }
                    </Grid>
                }
            </Box>
            <Box textAlign="center" flexGrow={1}>
                <Button onClick={() => scroll()}>Scroll for more</Button>
            </Box>
        </Box>
    )
}
