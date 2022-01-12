import React from "react";

const Child = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref}></input>
    );
})

export default Child;