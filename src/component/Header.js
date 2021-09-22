import React from "react";
const Header= ()=> {
return(
<>
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/slider img/Untitled-1.png" alt="Los Angeles" width="1100" height="500" />
      <div className="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src="img/slider img/Untitled-2.png" alt="Chicago" width="1100" height="500"/>
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src="img/slider img/Untitled-3.png" alt="New York" width="1100" height="500"/>
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
</>
)}
export default Header;
