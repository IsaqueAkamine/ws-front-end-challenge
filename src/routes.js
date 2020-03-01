import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import Login from './pages/login';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import MenuPage from './pages/menupage';

import Header from './components/header';
import SideNav from './components/sidenav';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Mains />
        </Switch>
    </BrowserRouter>
);

export default Routes;

function Mains() {
    return (
        <div>
            <Header />
            <SideNav />
            <div style={{ position: 'absolute', top: 50, bottom: 0, left: 60, right: 0 }}>
                <Switch>
                    <Route path="/main">
                        <Main />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/menupage">
                        <MenuPage />
                    </Route>
                    <Route path="*" component={() => { return (<div><h1>Page Not found</h1></div>) }} />
                </Switch>
            </div>
        </div>
    );
}
