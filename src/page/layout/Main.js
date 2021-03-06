import React from 'react';
import {Layout} from "antd";
import {Route, withRouter} from "react-router-dom";
import Head from "./Head";
const {Content, Footer, Header } = Layout;

function Child(props) {
    return (
        <div>{props.children}</div>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={true}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const {routes} = this.props;
        return (
            <div className='container'>
                <Head/>
                <Child>
                    {routes ? routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    )) : null}
                </Child>
            </div>
        );
    }
}

export default withRouter(Main);