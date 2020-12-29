/**
 * 轮播首页
 */
import React from "react";
import logoImage from "../assets/images/logo.png";
import Moment from "moment";
import {getWeather} from "../server/home";
import "../assets/css/home.scss";
import myImage from "../assets/images/my.png";
import { Typography, Divider, Button, Tag } from 'antd';
//
import {
    SwapRightOutlined,
    LikeOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';

import "swiper/dist/css/swiper.min.css";
import picImage from "../assets/images/pic.jpeg"

let Swiper = null;
if (typeof window == "object") {
    Swiper = require("swiper");
}

const { Title, Paragraph, Text, Link } = Typography;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wraperHeight: 0,
            weatherInfo: {},
            isTwoAnimate: false,
            swiper: null,
        };

        // 绑定天气预报作用域
        this.getNowWeather = this.getNowWeather.bind(this);
    }

    // 获取天气预报
    getNowWeather() {
        getWeather().then((res) => {
            console.log(res);
            const {code, data} =  res.data;
            if (code == 200) {
                this.setState({
                    weatherInfo: data,
                })
            }
        }).catch((error) => {
            //alert(JSON.stringify(error))
        })
    }

    componentDidMount() {
        let _self = this;
        this.setState({
            wraperHeight: document.documentElement.clientHeight,
        })

        // 获取天气预报
        this.getNowWeather();
        // swiper
        if (typeof window == "object") {

            setTimeout(() => {
                let mySwiper = new Swiper('.swiper-container', {
                    initialSlide : 0,
                    direction : 'vertical',
                    pagination : '.swiper-pagination',
                    paginationElement : 'li',
                    paginationClickable :true,
                    mousewheelControl : true,
                    keyboardControl : true,
                    onSlideChangeEnd: function(swiper){
                        switch(swiper.activeIndex) {
                            case 1:
                                _self.setState({
                                    isTwoAnimate: true
                                })
                                break;
                            default:
                                _self.setState({
                                    isTwoAnimate: false
                                })
                        }
                    },
                    onInit: function(swiper){

                    }
                })
                window.onResize = function() {
                    mySwiper.onResize();
                }

                this.setState({
                    swiper: mySwiper,
                })
            }, 200)
        }
    }

    componentWillUnmount() {
        if (this.state.swiper) {
            this.state.swiper.destroy();
        }
    }

    render() {
        const {wraperHeight, weatherInfo, isTwoAnimate} = this.state;

        return (
            <div className="hw-home-big-container" style={{height: wraperHeight + "px", overflow: "hidden"}}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{height: wraperHeight + "px"}}>
                            {/*    */}
                            <div className="hw-home-container posr" style={{height: wraperHeight + "px"}}>

                                {/*遮罩层*/}
                                <div className="hw-shade" style={{height: wraperHeight + "px"}}></div>

                                {/**/}
                                <div className="hw-home-box" style={{height: wraperHeight + "px"}}>
                                    <div className="hw-home-main">
                                        <div>
                                            <img className="hw-logo" src={logoImage}/>
                                        </div>
                                        {/*    */}
                                        <div>
                                            <div className="hw-weather">
                                                <p>这是我们认识的
                                                    <span className="hw-days hw-c-italic">
                                        {Moment(new Date()).diff(Moment(new Date("2012-07-26")), 'days')}
                                    </span>
                                                    天，今天温度
                                                    <span className="hw-temperature hw-c-italic">{weatherInfo.temperature || "获取不到温度"}</span>摄氏度，
                                                    <img className="hw-weather-img" src={weatherInfo.icon}/>
                                                    <span className="hw-weather-text">{weatherInfo.weather || "没有天气"}</span>，
                                                    <span>{weatherInfo.tips || "没什么想说的！"}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**/}
                        </div>
                        <div className="swiper-slide" style={{height: wraperHeight + "px", backgroundColor: "#000"}}>
                            <div className="posr hw-my-container"  style={{height: wraperHeight + "px"}}>
                                {/*遮罩层*/}
                                <div className="hw-shade hw-shade-my" style={{height: wraperHeight + "px"}}></div>
                                <div className="my-box">
                                    <div className="my-box-info posr">
                                        <div className={["pos-animate-quan", isTwoAnimate ? "pos-animate" : null].join(" ")}>
                                            <img src={myImage}/>
                                        </div>
                                        <div className={["pos-animate-my", isTwoAnimate ? "pos-animate-zj" : null].join(" ")}>
                                            <p>我</p>
                                        </div>
                                        <div className={["pos-animate-text", isTwoAnimate ? "pos-animate-ty" : null].join(" ")}>
                                            <Typography>
                                                <Title level={2} style={{color: "#4ba8a1"}}>
                                                    周瀚伟
                                                </Title>
                                                <Paragraph>
                                                    <p>
                                                        <SwapRightOutlined/>联系方式: 18505151035
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>邮箱: sgzhouhanwei@163.com
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>微信: 18505151035
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>QQ: 619612525
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>籍贯: 江苏省盐城市建湖县 (邮编：224700)
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>现居住地: 上海嘉定江桥万达-大宅风范城
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>教育经历: 苏州科技大学(计算机科学与技术 在读) ｜ 泰州高等专科学校【泰州学院】（美术教育）
                                                    </p>
                                                    <p>
                                                        <SwapRightOutlined/>简历下载: ）
                                                    </p>
                                                </Paragraph>
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <p>我</p>*/}
                            {/*    <p>是</p>*/}
                            {/*    <p>谁</p>*/}
                            {/*</div>*/}
                        </div>
                        {/*<div className="swiper-slide" style={{height: wraperHeight + "px"}}>*/}
                        {/*    <div className="posr hw-news-container"  style={{height: wraperHeight + "px"}}>*/}
                        {/*        /!*遮罩层*!/*/}
                        {/*        <div className="hw-shade hw-shade-news" style={{height: wraperHeight + "px"}}></div>*/}
                        {/*        <div className="hw-news-box" style={{height: wraperHeight + "px"}}>*/}
                        {/*            <div className="hw-news-info">*/}
                        {/*                <div>*/}
                        {/*                    <Divider orientation="left" style={{width: "100%"}}>*/}
                        {/*                        <Title level={3}>*/}
                        {/*                            资讯*/}
                        {/*                            <a style={{fontSize: "14px", marginLeft: "12px"}} href="#">查看更多</a>*/}
                        {/*                        </Title>*/}
                        {/*                    </Divider>*/}
                        {/*                </div>*/}
                        {/*                <div className="hw-news-info-main">*/}
                        {/*                    <div className="hw-news-info-main-flex">*/}
                        {/*                        <div className="hw-news-left">*/}
                        {/*                            <dl>*/}
                        {/*                                <dt>*/}
                        {/*                                    <img className="hw-news-img-animate" src={picImage}/>*/}
                        {/*                                </dt>*/}
                        {/*                                <dd>*/}
                        {/*                                    <h3>中方宣布，暂停中英间往返航班</h3>*/}
                        {/*                                    <p>汪文斌表示，近日英国宣布发现了变异的新冠病毒毒株，并已将有关信息通报了世界卫生组织，多国也宣布对英国采取关闭边境、停飞往返航班、禁止英航班入境等措施。</p>*/}
                        {/*                                    <p><LikeOutlined />33</p>*/}
                        {/*                                </dd>*/}
                        {/*                            </dl>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="hw-news-right">*/}
                        {/*                            <dl>*/}
                        {/*                                <dt>*/}
                        {/*                                    <img className="hw-news-img-animate" src={picImage}/>*/}
                        {/*                                </dt>*/}
                        {/*                                <dd>*/}
                        {/*                                    <h3>中方宣布，暂停中英间往返航班</h3>*/}
                        {/*                                </dd>*/}
                        {/*                            </dl>*/}
                        {/*                            <dl>*/}
                        {/*                                <dt>*/}
                        {/*                                    <img className="hw-news-img-animate" src={picImage}/>*/}
                        {/*                                </dt>*/}
                        {/*                                <dd>*/}
                        {/*                                    <h3>中方宣布，暂停中英间往返航班</h3>*/}
                        {/*                                </dd>*/}
                        {/*                            </dl>*/}
                        {/*                            <dl>*/}
                        {/*                                <dt>*/}
                        {/*                                    <img className="hw-news-img-animate" src={picImage}/>*/}
                        {/*                                </dt>*/}
                        {/*                                <dd>*/}
                        {/*                                    <h3>中方宣布，暂停中英间往返航班</h3>*/}
                        {/*                                </dd>*/}
                        {/*                            </dl>*/}
                        {/*                            <dl>*/}
                        {/*                                <dt>*/}
                        {/*                                    <img className="hw-news-img-animate" src={picImage}/>*/}
                        {/*                                </dt>*/}
                        {/*                                <dd>*/}
                        {/*                                    <h3>中方宣布，暂停中英间往返航班</h3>*/}
                        {/*                                </dd>*/}
                        {/*                            </dl>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="hw-news-contral">*/}
                        {/*                        <div>*/}
                        {/*                            <LeftOutlined/>*/}
                        {/*                        </div>*/}
                        {/*                        <div>*/}
                        {/*                            <RightOutlined/>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/*    */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Home;