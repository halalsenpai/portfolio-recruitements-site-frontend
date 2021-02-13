import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';
import {Home, About} from '../pages';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';
import CFooter from '../uiComponents/CFooter/CFooter';
import CHeader from '../uiComponents/CHeader/CHeader';

function Routing() {
    return (
        <Fragment>
        <CHeader />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="/about" component={About}/>

                <Route path="*" render={() => (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )}/>
            </Switch>
            <CFooter />
        </Fragment>
    )
}

export default Routing;
