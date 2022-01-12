import { Component, Fragment } from "react";

class AddPosts extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello from Add Post</h1>
                {this.props.value}
                {this.props.children}
            </Fragment>
        )
    };
}

export default AddPosts;