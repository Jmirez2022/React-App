import React from "react";

const liStyle = {
    padding: '5px',
    letterSpacing: '1px'
}

const buttonStyle = {
    fontSize: '12px',
    fontWeight: '700',
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    marginLeft: '15px'
}

function ListDesign(props) {
    const { title, clickToDelete, index } = props;
    return (
        <li style={ liStyle }>{title}
            <button style={ buttonStyle } onClick={()=> {clickToDelete(index)}}>Delete</button>
        </li>
    )
}

export default ListDesign;