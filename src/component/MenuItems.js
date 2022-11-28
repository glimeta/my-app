import React from "react";
import "./MenuItems.css";

function MenuItems(props){
    return(
        <ul>
            <li>{props.mi.i1}</li>
            <li>{props.mi.i2}</li>
            <li>{props.mi.i3}</li>
        </ul>
    );
}

export default MenuItems;
