import React  from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home'
import Layout from './common/layout';

const Root = () =>  (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Layout>
    
)



export default Root;