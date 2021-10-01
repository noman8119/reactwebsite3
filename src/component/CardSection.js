import React from "react";
import Card from './Card';
import cardData from "./cardData";
const CardSection = (props) => {
    return (
        <section className="card-sec" id="demo2">
        <div className="container">
        <div className="jumbotron  mb-0 text-left bg-transparent ">
                <div className="container top-card-text">
                    <h5><span>What We Do</span></h5>
                    <h3>Where Innovation <span>Exists</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscin elit sed tempor <br/>
incididunt ut labore et dolore magnan</p>
                </div>
            </div>
        </div>
        <div className="container" >
            {/* <div className="jumbotron  mb-0 text-center bg-dark text-light">
                <div className="container">
                    <h1>Our Team</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                        responsive, mobile-first projects on the web.</p>
                </div>
            </div> */}
            <div className="row justify-content-center">
                {cardData.map((val) => {
                    return (<Card key={val.id} name={val.name} text={val.text} imgsrc={val.imgsrc}/>)
                })}
            </div>
        </div>
        </section>
    );
}
export default CardSection;