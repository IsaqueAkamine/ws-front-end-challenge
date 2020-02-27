import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Login from './pages/login';
import Dashboard from './pages/dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;