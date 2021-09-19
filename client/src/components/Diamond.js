import React from "react";
import "./Diamond.css";

function Diamond(props) {

    const { title, src, onSelect, selected } = props;
    return (
        <div id={'diamond-item'} onClick={onSelect} className={selected ? 'diamond-button-selected' : 'diamond-button'}>
            <div>{title}</div>
            <img className={'diamond-button-img'} src={src} />
        </div>
    );
}

export default Diamond;
