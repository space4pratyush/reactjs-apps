import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import IPAddressContainer from "./IpAddressContainer";

var destination=document.querySelector("#container");

ReactDom.render(
    <div>
        <IPAddressContainer />
    </div>,
    destination
)