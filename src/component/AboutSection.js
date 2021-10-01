import React from "react";
// import about from '../images/about-left.png';
const AboutSection = () => {
    return (
        <section className="about-sec" id="demo1">
        <div class="container " >
            <div class="row">
                <div class="col-lg-6 col-md-12">
                {/* <img className="header-right" src={about} alt="header-right"/> */}
                </div>
                <div class="col-lg-6 col-md-12">
              <div className="about-right">
<h5>About us</h5>
<h3>We provide Creative solutions<br/> 
to improve your business!
</h3>
<p>
Lorem ipsum dolor sit amet consectetur adipising elit sedin 
eiusmod tempor incididunt ut labore dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullam
com laboris nisi commodo consequat.
</p>

<ul>
  <li>Eiusmod Tempor Incididunt ut Labore Dolore</li>
  <li>Consequuntur Magni Dos Ratione Volup Tatem</li>
  <li>Minus Id Quod Maxime Placeat Facere Possimus</li>
  <li>Debitis Aut Rerum Necessitatibus Saepe Eveniet</li>
</ul> 
              </div>
                </div>
            </div>
            {/* modal */}
    
        </div>
        </section>
    );
}
export default AboutSection;