import React from "react";
import logoImage from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import {Menu, Dropdown} from "antd";
import {MenuOutlined} from "@ant-design/icons";

export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ textAlign:"right", width: "100%", position: 'fixed', zIndex: 1, right: "12px", top: "12px" }}>
                <Dropdown overlay={(
                    <Menu>
                        <Menu.Item>
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/new_list">资讯</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/new_list_details">资讯详情</Link>
                        </Menu.Item>
                    </Menu>
                )}>
                    <MenuOutlined spin={false} style={{fontSize: "20px"}}/>
                </Dropdown>
            </div>
        )
    }
}
