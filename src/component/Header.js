import React from "react";
import web from '../images/header-right.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const Header= ()=> {
return(
<>
<section className="section1" id="demo">
<div className="container">
<div className="row">
<div className="col-md-6 col-12">
<div className="header-left">
<h1>Simple <span>solution </span> <br/> for complex <br/> <span>problems</span></h1>
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit sedd 
eiusmod tempor incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.
</p>

<button className="contact-btn">Contact Us <span><ChevronRightIcon/></span></button>
</div>

</div>
<div className="col-md-6 col-12">
<img className="header-right" src={web} alt="header-right"/>
  
</div>

</div>

</div>
</section>
</>
)}
export default Header;
