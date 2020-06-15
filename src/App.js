import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// page
import About from './Pages/About';
import Users from './Pages/Users';
import Home from './Pages/Home';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/About'>
                        <About />
                    </Route>
                    <Route path='/Users'>
                        <Users />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
