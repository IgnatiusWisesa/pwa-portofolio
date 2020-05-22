import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminRoute from './adminRoute';
import UserRoute from './userRoute';

const MainRoute = () => {
    return(
        <Switch>
            <Route path="/admin" component={AdminRoute} />
            <Route path="/" component={UserRoute} />
        </Switch>
    )
}

export default MainRoute