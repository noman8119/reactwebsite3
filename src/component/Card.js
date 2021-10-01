import React from "react";
const Card = (props) => {
    return (
        <div className="col-lg-4  col-md-6 col-10 mx-auto"> 
        <div className=" main">
        <div className="first"></div>
            <div className="card second card-dev ">
                <img className="card-img-top" src={props.imgsrc} alt="new"/>
                <div className="card-body  text-center">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.text}</p>
                    {/* <a href="demo.html" className="btn btn-primary">See Profile</a> */}
                   
                </div>
                </div>
            </div>
            
        </div>
    );
}
export default Card;