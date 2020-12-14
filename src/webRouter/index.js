import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import routes from "../config/routes";

export default function App() {
    return (
        <div>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </div>
    );
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
