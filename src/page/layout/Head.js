import React from "react";
import {Link} from "react-router-dom";
import {Menu, Dropdown} from "antd";
import {MenuOutlined, SearchOutlined} from "@ant-design/icons";
import musicImage from "../../assets/images/music.png";
import musicStopImage from "../../assets/images/music-stop.png";
import menuImage from "../../assets/images/menu.png";
import searchImage from "../../assets/images/search.png";

export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTurn: false,
        };
        // 播放或者暂停音乐
        this.handleMusic = this.handleMusic.bind(this);
    }

    handleMusic(type) {
        this.setState({
            isTurn: !this.state.isTurn,
        }, () => {
            if ( this.state.isTurn) {
                document.getElementById("hwMusic").play();
            } else {
                document.getElementById("hwMusic").pause();
            }
        })
    }

    render() {
        const {isTurn} = this.state;
        return (
            <div className="hw-head">
                <audio id="hwMusic" className="none" src="./static/mp3/play.mp3" autoPlay="autoplay" loop="loop"
                       controls>
                    您的浏览器不支持 audio 标签。
                </audio>
                <div className="music-box">
                    {/*<img style={{marginRight: "12px"}} src={searchImage}/>*/}
                    <img onClick={this.handleMusic} className={[isTurn ? "turn" : "none"].join(" ")} src={musicImage}/>
                    <img onClick={this.handleMusic} className={[!isTurn ? null : "none"].join(" ")} src={musicStopImage}/>
                    {/*<Dropdown overlay={(*/}
                    {/*    <ul className="hw-menu-ul">*/}
                    {/*        <li className="hw-menu-li">*/}
                    {/*            <Link to="/">首页</Link>*/}
                    {/*        </li>*/}
                    {/*        <li className="hw-menu-li">*/}
                    {/*            <Link to="/new_list">资讯</Link>*/}
                    {/*        </li>*/}
                    {/*        <li className="hw-menu-li">*/}
                    {/*            <Link to="/new_list_details">家庭财务支出统计</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*)}>*/}
                    {/*    <img src={menuImage} className="hw-menu"/>*/}
                    {/*</Dropdown>*/}
                </div>
            </div>
        )
    }
}
