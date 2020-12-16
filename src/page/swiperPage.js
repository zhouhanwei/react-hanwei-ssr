import React from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Home from "./home";

class SwiperPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wraperHeight: 0,
        };
    }

    componentDidMount() {
        this.setState({
            wraperHeight: document.documentElement.clientHeight,
        })

        //
        let mySwiper = new Swiper('.swiper-container', {
            // autoplay: 5000,//可选选项，自动滑动
            initialSlide: 0,
        })
    }

    render() {
        const {wraperHeight} = this.state;
        return (
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{height: wraperHeight + "px"}}>
                            <Home/>
                        </div>
                        <div className="swiper-slide" style={{height: wraperHeight + "px"}}>slider2</div>
                        <div className="swiper-slide" style={{height: wraperHeight + "px"}}>slider3</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SwiperPage;