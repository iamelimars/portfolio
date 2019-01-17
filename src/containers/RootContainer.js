import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './Home/Home';
import Project from './Project';


const RouteContainer = posed.div({
    enter: { opacity: 1, y: 0, delay: 600, beforeChildren: true },
    exit: { opacity: 0, y:0 }
});

const RootContainer = () => (
    <Route
        render={({ location }) => (
            <div id="site-container">
                    <PoseGroup>
                        <RouteContainer key="page-transition">
                            {/* <Link to="/project">Project</Link>
                            <Link to="/">Home</Link> */}
                            <Switch location={location}>
                                <Route exact path="/" component={Home} key="home" />
                                <Route path="/project" component={Project} key="project" />
                            </Switch>
                        </RouteContainer>
                    </PoseGroup>
            </div>
        )}
    />
)


export default RootContainer