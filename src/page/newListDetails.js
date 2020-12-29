/**
 * 资讯页
 */
import React from "react";
import {Button, Space, Typography, Comment, Tooltip, Avatar, Form, Input} from 'antd';
import {LikeOutlined, MessageOutlined, RightCircleOutlined, StarOutlined, RightOutlined, LeftOutlined} from "@ant-design/icons";
import moment from "moment";
import "../assets/css/news.scss";
import picImage from "../assets/images/pic.jpeg"
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class NewListDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="hw-new-details" style={{width: "600px", margin: "0 auto", padding: "45px 0"}}>
                <Title level={3}>转正×3！这份11月的成绩单真亮眼</Title>
                <div style={{textAlign: "center", margin: "12px 0"}}>
                    <LikeOutlined/> 123
                    &nbsp;&nbsp;
                    <MessageOutlined/> 345
                </div>
                <div>
                    <p>
                        按中国社科院世界社会保障研究中心主任郑秉文的说法，延迟退休年龄最重要的原因是人的预期寿命延长、生命周期发生了变化，这是人类社会发展的共同特征，几乎所有国家都在对应调整退休政策。
                    </p>
                    <img src={picImage} width="100%"/>
                    <p>
                        按中国社科院世界社会保障研究中心主任郑秉文的说法，延迟退休年龄最重要的原因是人的预期寿命延长、生命周期发生了变化，这是人类社会发展的共同特征，几乎所有国家都在对应调整退休政策。
                    </p>
                </div>
                <div className="hw-news-details-arrow">
                    <div>
                        <Button disabled type="default" size="small" inline={true}>
                            <LeftOutlined />
                        </Button>
                    </div>
                    <div>
                        <Button type="default" size="small" inline={true}>
                            <RightOutlined />
                        </Button>
                    </div>
                </div>
                {/**/}
                <div>
                    <div style={{margin: "22px 0"}}>
                        <Form
                            layout="vertical"
                            name="basic"
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="昵称"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="请输入昵称"/>
                            </Form.Item>

                            <Form.Item
                                label="评论(0/100)"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <TextArea rows={4} placeholder="请输入评论内容"/>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <Comment
                            actions={(<div>wq23421</div>)}
                            author={<a>Han Solo</a>}
                            avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                />
                            }
                            content={
                                <p>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                                    and efficiently.
                                </p>
                            }
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewListDetails;
