import react, { Fragment } from "react";

class ErrorBoundary extends react.Component  {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.state = ({
          error: error,
          errorInfo: true
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.errorInfo && <h1>helllo from error</h1>}
            </Fragment>
        );
    }
}

export default ErrorBoundary;