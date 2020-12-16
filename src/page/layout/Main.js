import React from 'react';
import { Layout} from "antd";
import {Route, Link, withRouter} from "react-router-dom";
// import logoImage from "../../assets/images/logo192.png";
import logoImage from "../../assets/images/logo.png";
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
        this.state= {};
    }
    render() {
        const {routes} = this.props;
        return (
            <div className='main-layout'>
                <Layout>
                    这是个标题
                    <div style={{ position: 'fixed', zIndex: 1, width: '100%', display: "flex" }}>
                        <div>
                            <img src={logoImage} width="100"/>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">首页</Link>
                                </li>
                                <li>
                                    <Link to="/">关于我</Link>
                                </li>
                                <li>
                                    <Link to="/app">资讯心得</Link>
                                </li>
                                <li>
                                    <Link to="/app2">联系方式</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{height: "500px", backgroundColor: "#333333"}}>
                    </div>
                    <div>
                        <div>
                            <h3>资讯心得</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>关于我</h3>
                        </div>
                    </div>
                    <div>
                    </div>
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