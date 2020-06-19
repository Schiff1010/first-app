import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Styles from './../Assets/Styles';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: 20,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            href='/News'
        >
            Secondary
        </Button>
    );
}
