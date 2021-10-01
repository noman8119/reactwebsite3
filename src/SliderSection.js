import React from "react";
import slide1 from '../src/images/girl.png'
import slide2 from '../src/images/boy.png'
import slide3 from '../src/images/girl2.png'
;

const SliderSection=()=>{
    return(
        <>
    <section class="slider-sec pb-2" id="demo4">
    <div className="container">
        <div className="jumbotron pt-2 mb-0 text-left bg-transparent ">
                <div className="container top-card-text">
                    <h5><span>What We Do</span></h5>
                    <h3>Where Innovation <span>Exists</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscin elit sed tempor <br/>
incididunt ut labore et dolore magnan</p>
                </div>
            </div>
        </div>
    <div class="container">
        <div class="row">
          

            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide"  data-ride="carousel">
       

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row d-flex justify-content-around ">

                            <div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
            <div class="card card1" >
                <img src={slide2} class="card-img-top card-img-top1" alt="..."/>
                <ul>
                    <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    <li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
                    <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                  
                
                   <li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
                </ul>
                <div class="card-body card-body1">
                  <h5 class="card-title card-title1">SOPHIE TURNER</h5>
                  <p class="card-text card-text1">CEO</p>
                  
                </div>
              </div>
        </div> 
        <div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
            <div class="card card1" >
                <img src={slide3} class="card-img-top card-img-top1" alt="..."/>
                <ul>
                    <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    <li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
                    <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                  
                
                   <li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
                </ul>
                <div class="card-body card-body1">
                  <h5 class="card-title card-title1">SAQIB SHAKEEL</h5>
                  <p class="card-text card-text1">Team Leader</p>
                  
                </div>
              </div>
        </div> 
        <div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
            <div class="card card1" >
                <img src={slide1} class="card-img-top card-img-top1" alt="..."/>
                <ul>
                    <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    <li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
                    <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                  
                
                   <li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
                </ul>
                <div class="card-body card-body1">
                  <h5 class="card-title card-title1">MASSIE WILLIAMS</h5>
                  <p class="card-text card-text1">TEAM LEADER</p>
                  
                </div>
              </div>
        </div> 
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div class="row d-flex justify-content-around ">

<div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
<div class="card card1" >
<img src={slide1} class="card-img-top card-img-top1" alt="..."/>
<ul>
<li><i class="fa fa-facebook" aria-hidden="true"></i></li>
<li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
<li><i class="fa fa-linkedin" aria-hidden="true"></i></li>


<li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
</ul>
<div class="card-body card-body1">
<h5 class="card-title card-title1">SOPHIE TURNER</h5>
<p class="card-text card-text1">CEO</p>

</div>
</div>
</div> 
<div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
<div class="card card1" >
<img src={slide2} class="card-img-top card-img-top1" alt="..."/>
<ul>
<li><i class="fa fa-facebook" aria-hidden="true"></i></li>
<li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
<li><i class="fa fa-linkedin" aria-hidden="true"></i></li>


<li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
</ul>
<div class="card-body card-body1">
<h5 class="card-title card-title1">SAQIB SHAKEEL</h5>
<p class="card-text card-text1">Team Leader</p>

</div>
</div>
</div> 
<div class="col-md-3 col-8 mx-sm-auto mb-3 ml-lg-5 ">
<div class="card card1" >
<img src={slide3} class="card-img-top card-img-top1" alt="..."/>
<ul>
<li><i class="fa fa-facebook" aria-hidden="true"></i></li>
<li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
<li><i class="fa fa-linkedin" aria-hidden="true"></i></li>


<li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
</ul>
<div class="card-body card-body1">
<h5 class="card-title card-title1">MASSIE WILLIAMS</h5>
<p class="card-text card-text1">TEAM LEADER</p>

</div>
</div>
</div> 
</div>
</div>
                        
                    </div>
                </div>
            </div>
{/* controll */}
            <div class="col-12 text-center p-5">
                <a class="btn btn-primary mb-3 mr-1 controll" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    {/* <i class="fa fa-arrow-left"></i> */}
                </a>
                <a class="btn btn-primary mb-3 controll" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    {/* <i class="fa fa-arrow-right"></i> */}
                </a>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default SliderSection;