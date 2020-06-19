import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography
                        component='h1'
                        variant='h2'
                        align='center'
                        color='textPrimary'
                        gutterBottom
                    >
                        Content Posts
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    href='/Content'
                                >
                                    Manage Posts Here!
                                </Button>
                            </Grid>
                            {/* <Grid item>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    href='/List'
                                >
                                    List Posts Here!
                                </Button>
                            </Grid> */}
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    );
}
