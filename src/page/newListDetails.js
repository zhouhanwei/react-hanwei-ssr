/**
 * 资讯页
 */
import React from "react";
import {Button, Space, Typography} from 'antd';
import {LikeOutlined, MessageOutlined, RightCircleOutlined, StarOutlined, RightOutlined, LeftOutlined} from "@ant-design/icons";
const { Title, Paragraph } = Typography;

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
            <div style={{width: "600px", margin: "0 auto", backgroundColor: "rgba(255, 255, 255, 1)", padding: "12px"}}>
                <Title level={3}>转正×3！这份11月的成绩单真亮眼</Title>
                <div>
                    <Button type="default" size="small" inline={true}>
                        <LeftOutlined />上一篇
                    </Button>
                    <Button type="default" size="small" inline={true}>
                        下一篇<RightOutlined />
                    </Button>
                </div>
                <div>
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
                </div>
                <div>
                    <Paragraph>
                        按中国社科院世界社会保障研究中心主任郑秉文的说法，延迟退休年龄最重要的原因是人的预期寿命延长、生命周期发生了变化，这是人类社会发展的共同特征，几乎所有国家都在对应调整退休政策。
                    </Paragraph>
                </div>
            </div>
        )
    }
}

export default NewListDetails;
