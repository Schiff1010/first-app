import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// component
import Header from '../Components/Header';
// main Pages
import Home from '../Pages/Home';
import ListContent from '../Pages/ListContent';
import PostContent from '../Pages/PostsContent';

import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Routers(props) {
    const classes = useStyles();
    return (
        // <div className={classes.root}>
        <Router>
            <CssBaseline />
            <Header />
            <main className={classes.content}>
                <Box mb={10} />
                <Route exact path='/' component={Home} />
                <Route exact path='/List' component={ListContent} />
                <Route exact path='/Content' component={PostContent} />
            </main>
            {/* <Footer /> */}
        </Router>
        // </div>
    );
}

export default Routers;
