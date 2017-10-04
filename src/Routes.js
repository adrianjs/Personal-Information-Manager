import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NewNote from './containers/NewNote';
import AppliedRoute from './components/AppliedRoute';
import NotFound from './containers/NotFound';

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/new" exact component={NewNote} props={childProps} />
        {/* Catch all unmatched routes */ }
        <Route component={NotFound} />
    </Switch>;