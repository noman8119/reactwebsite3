import React from "react";
import Price from './Price';
import priceData from "./priceData";
const PriceSection = () => {
    return (
        <div className="container  bg-dark" id="demo3">
            <div className="jumbotron  mb-0 text-center bg-dark text-light">
                <div className="container">
                    <h1>Our Prices</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                        responsive, mobile-first projects on the web.</p>
                </div>
            </div>
            {priceData.map((val) => {
                return (<Price
                    key={val.id}
                    pack={val.pack}
                    rate={val.rate}
                    data={val.data}
                    email={val.email}
                    domain={val.domain}
                    band={val.band}/>)
            })}
        </div>
    );
}

export default PriceSection;