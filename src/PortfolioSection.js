import React from "react";
import portfolio from '../src/images/portfolio-right1.jpg';
const PortfolioSection =()=>{
    return(
    <>
<section className="portfolio-sec" id="demo3">


<div className="container">

<div className="row">
<div className="col-md-6 col-12">
<div className="jumbotron pt-2 mb-0 text-left bg-transparent ">
                <div className="container top-card-text">
                    <h5><span>Our Best Work Portfolio</span></h5>
                    <h3>A place where <span>ideas grow</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do <br/>
eiusmod tempor incididunt ut labore et dolore magna aliquan <br/>
Ut enim ad minim veniam, quis nostrud exercitation ullamace <br/>
laboris nisi ut aliquip ex ea commodo consequat.</p>

<ul>
  <li>Eiusmod Tempor Incididunt ut Labore Dolore</li>
  <p className="pl-5">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
  <li className="li-2">Consequuntur Magni Dos Ratione Volup Tatem</li>
  <p className="pl-5">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
  <li className="li-3">Minus Id Quod Maxime Placeat Facere Possimus</li>
  <p className="pl-5">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
 
</ul> 
                </div>
            </div>
</div>
<div className="col-md-6 col-12">
      <img className="header-right pt-5"  src={portfolio} alt="portfolio"/> 
</div>
</div>
</div>


</section>

    </>
)




}
export default PortfolioSection;