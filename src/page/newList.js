/**
 * 资讯页
 */
import React from "react";
import { List, Avatar, Space, Timeline, Tag } from 'antd';
import {Link} from "react-router-dom";
import { MessageOutlined, LikeOutlined, StarOutlined, ClockCircleOutlined } from '@ant-design/icons';
//import logoImage from "../assets/images/logo.png";
import InfiniteScroll from 'react-infinite-scroll-component';
import {withRouter} from "react-router-dom";
import "../assets/css/news.scss";

const listData = [];
for (let i = 0; i < 2; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `转正×3！这份11月的成绩单真亮眼 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '最近，延迟退休问题再一次受到热议。此前，中央已在“十四五”规划和二〇三五年远景目标的建议中，明确提出“实施渐进式延迟法定退休年龄”。',
        content:
            '按中国社科院世界社会保障研究中心主任郑秉文的说法，延迟退休年龄最重要的原因是人的预期寿命延长、生命周期发生了变化，这是人类社会发展的共同特征，几乎所有国家都在对应调整退休政策。',
    });
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

function CreateTimeline(props) {
    const {gotoDetails} = props;
    return (
        <Timeline mode="alternate">
            {
                listData.map((val, key) => {
                    const {title, description} = val;
                    return (
                        <Timeline.Item color="#4ba8a1" key={key} label={(
                            <div className="hw-news-time-line">
                                <div style={{color: "#fff"}}>
                                    <Tag color="#4ba8a1">2015</Tag>年
                                    <Tag color="#eb2f96">09</Tag>月
                                    <Tag color="#80ccf5">19</Tag>日
                                </div>
                                <div style={{marginTop: "12px"}}>
                                    <p>时间: 23:59:23</p>
                                    <p>分类: 风景</p>
                                    <p><LikeOutlined/> 33 <MessageOutlined/> 121</p>
                                </div>
                            </div>
                        )}>
                            <div className="hw-news-dl">
                                <Link to="/new_list_details" target="_blank">
                                    <dl>
                                        <dt>
                                            <img className="hw-news-img hw-news-img-animate" width="100%" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                                        </dt>
                                        <dd>
                                            <h3 className="hw-news-title-animate">{title}</h3>
                                            <p>{description}</p>
                                            <p style={{textAlign: "right"}}>more ></p>
                                        </dd>
                                    </dl>
                                </Link>
                            </div>
                        </Timeline.Item>
                    )
                })
            }
        </Timeline>
    )
}

class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: true,
        };

        //
        this.onChange = this.onChange.bind(this);
        this.getListData = this.getListData.bind(this);
        this.gotoDetails = this.gotoDetails.bind(this);
    }

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    getListData() {
        console.log("加载了")
        listData.push({
            href: 'https://ant.design',
            title: `转正×3！这份11月的成绩单真亮眼${Date.now()}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                '最近，延迟退休问题再一次受到热议。此前，中央已在“十四五”规划和二〇三五年远景目标的建议中，明确提出“实施渐进式延迟法定退休年龄”。',
            content:
                '按中国社科院世界社会保障研究中心主任郑秉文的说法，延迟退休年龄最重要的原因是人的预期寿命延长、生命周期发生了变化，这是人类社会发展的共同特征，几乎所有国家都在对应调整退休政策。',
        })
        this.setState({
            hasMore: true,  // 可以继续loading
        })
    }

    reloadListData() {
        console.log("刷新了");
    }

    // 跳转到详情页面
    gotoDetails() {
        const {history} = this.props;
        history.push("/new_list_details")
    }

    componentDidMount() {
    }

    render() {
        let timeLines = <CreateTimeline/>;
        const {hasMore} = this.state;
        return (
            <div>
                <InfiniteScroll
                    dataLength={listData.length} //This is important field to render the next data
                    next={this.getListData}
                    hasMore={hasMore}
                    loader={<h4 style={{ color: "#fff", textAlign: 'center' }}>正在加载...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>到底了，没有更多数据了！</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    refreshFunction={this.reloadListData}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={100}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; 刷新页面</h3>
                    }
                >
                    <div className="hw-news" style={{width: "600px", margin: "0 auto", padding: "45px 0"}}>
                        {timeLines}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default withRouter(NewList);
