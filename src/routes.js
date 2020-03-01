import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Login from './pages/login';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import MenuPage from './pages/menupage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/menupage" component={MenuPage} />
            <Route path="*" component={() => { return (<div><h1>Page Not found</h1></div>) }} />
        </Switch>
    </BrowserRouter>
);

export default Routes;