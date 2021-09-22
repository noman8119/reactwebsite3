import React from "react";
const Card = (props) => {
    return (
        <div className="col-lg-3  col-md-6 col-12 ">
            <div className="card bg-dark m-2">
                <img className="card-img-top" src={props.imgsrc} alt="new"/>
                <div className="card-body bg-dark text-light text-center">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.text}</p>
                    {/* <a href="demo.html" className="btn btn-primary">See Profile</a> */}
                </div>
            </div>
        </div>
    );
}
export default Card;