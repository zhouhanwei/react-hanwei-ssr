import Main from "../page/layout/Main";
import App from "../App";
import App2 from "../App2";
import Home from "../page/home";
import NewList from "../page/newList";
import NewListDetails from "../page/newListDetails";

export default  [
    {
        path: "/",
        component: Main,
        routes: [
            {
                path: "/", // 列表
                component: Home,
            },
            {
                path: "/new_list", // 列表
                component: NewList,
            },
            {
                path: "/new_list_details", // 列表
                component: NewListDetails,
            },
        ]
    }
];
