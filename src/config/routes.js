import Main from "../page/layout/Main";
import App from "../App";
import App2 from "../App2";

export default  [
    {
        path: "/",
        component: Main,
        routes: [
            {
                path: "/", // 列表
                component: App,
            },
            {
                path: "/app", // 列表
                component: App,
            },
            {
                path: "/app2", // 列表
                component: App2,
            },
        ]
    }
];
