import Main from "../src/page/layout/Main";
import App from  "../src/App";

export default  [
    {
        path: "/",
        component: Main,
        routes: [
            {
                path: "/",   // 列表
                component: App,
            },
            {
                path: "/app",   // 列表
                component: App,
            },
        ]
    }
];