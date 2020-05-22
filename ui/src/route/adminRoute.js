import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import AdminNav from '../components/admin/adminNav';
import LoginPage from '../pages/admin/loginPage';
import MyPage from '../pages/admin/myPage';
import Modals from '../components/admin/modals';

function AdminRoute() {
    return(
        <div>
            <AdminNav />
            <Switch>
                <Route exact path="/admin/myPage" component={MyPage} />
                {/* login route */}
                <Route exact path="/admin/login" component={LoginPage} />
                <Redirect from="/admin" to="/admin/login" />
            </Switch>
            {/* login modals */}
            <Modals />
        </div>
    )
}

export default AdminRoute