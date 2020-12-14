import React from 'react';
import { Layout} from "antd";
import {Route, Link, withRouter} from "react-router-dom";
import logoImage from "../../assets/images/logo192.png";
const {Content, Footer } = Layout;
function Child(props) {
    return (
        <div>{props.children}</div>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
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
        this.state= {};
    }
    render() {
        const {routes} = this.props;
        return (
            <div className='main-layout'>
                <Layout>
                    这是个标题
                    <ul>
                        <li>
                            <Link to="/app">App</Link>
                        </li>
                        <li>
                            <Link to="/app2">App2</Link>
                        </li>
                        <li onClick={() => this.props.history.push("/app2")}>app2</li>
                        <img src="/assets/images/logo192.png"/>
                    </ul>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <div>
                                    <Child>
                                        {routes ? routes.map((route, i) => (
                                            <RouteWithSubRoutes key={i} {...route} />
                                        )) : null}
                                    </Child>
                                </div>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created Hanwei Zhou</Footer>
                </Layout>
            </div>
        );
    }
}

export default withRouter(Main);