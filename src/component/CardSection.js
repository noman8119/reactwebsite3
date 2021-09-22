import React from "react";
import Card from './Card';
import cardData from "./cardData";
const CardSection = (props) => {
    return (
        <div className="container" id="demo2">
            <div className="jumbotron  mb-0 text-center bg-dark text-light">
                <div className="container">
                    <h1>Our Team</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                        responsive, mobile-first projects on the web.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                {cardData.map((val) => {
                    return (<Card key={val.id} name={val.name} text={val.text} imgsrc={val.imgsrc}/>)
                })}
            </div>
        </div>
    );
}
export default CardSection;