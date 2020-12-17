/**
 * 轮播首页
 */
import React from "react";
import logoImage from "../assets/images/logo.png";
import "../assets/css/home.scss";

class Home extends React.Component {
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
    }

    render() {
        const {wraperHeight} = this.state;
        return (
            <div>
                <div className="hw-home-box" style={{height: wraperHeight + "px"}}>
                    <div className="hw-home-main">
                        <div>
                            <img className="hw-logo" src={logoImage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;