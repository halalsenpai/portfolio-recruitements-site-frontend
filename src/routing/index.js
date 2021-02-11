import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';
import {Home, About} from '../pages';
import CHeader from '../uiComponents/CHeader/CHeader';

function Routing() {
    return (
        <Fragment>
        <CHeader />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="*" render={() => (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )}/>
            </Switch>
        </Fragment>
    )
}

export default Routing;
