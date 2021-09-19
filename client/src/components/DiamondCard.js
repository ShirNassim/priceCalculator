import React from "react";
import "./Diamond.css";

function Diamond(props) {

    const { title, src } = props;
    return (
        <div id={'diamond-card'}>
            <div>{title}</div>
            <img className={'diamond-button-img'} src={src} />
        </div>
    );
}

export default Diamond;
