import React from "react";
const Price = (props) => {
    return (
        <div className="columns">
            <ul className="price">
                <li className="header">{props.pack}</li>
                <li className="grey">{props.rate}
                    / Year</li>
                <li>{props.data}
                    Storage</li>
                <li>{props.email}
                    Email</li>
                <li>{props.domain}
                    Domains</li>
                <li>{props.band}
                    Bandwidth</li>
                <li className="grey">
                    <a href="demo.html" className="button">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}
export default Price;