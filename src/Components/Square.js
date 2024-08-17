import React from "react";

const Square = (props) => {
    return(
        <div onClick={props.onClick} style={{border: '1px solid #d1d1d1', height: '50px', width: '50px' }} className="square">{props.value}</div>
    )
}

export default Square;