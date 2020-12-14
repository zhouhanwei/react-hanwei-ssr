import React from "react";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>这是个标题</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Main