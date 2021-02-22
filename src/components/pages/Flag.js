import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Grid, Paper, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) =>({
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        background: '#cfedfc'
    },
}));
export function Flag(props) {
    const { country } = props;

    const classes = useStyles();

    return (
        <>
            <Grid item xl={3} sm={6} xs={12}>
                <Paper className={classes.paper} spacing={2}>
                    <Card variant="outlined">
                        <CardMedia
                            className={classes.media}
                            image={country.flag.svgFile}
                            title={country.name}
                        />
                    </Card>
                    <br/>
                    <Typography color="textSecondary" gutterBottom>
                        {country.name}
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}
