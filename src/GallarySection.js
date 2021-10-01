import React from "react";
import bar from '../src/images/bar.png';
import gal1 from '../src/images/gal1.png';
import gal2 from '../src/images/gal2.png';
import gal3 from '../src/images/gal3.png';
import gal4 from '../src/images/gal4.png';
import gal5 from '../src/images/gal5.png';
import gal6 from '../src/images/gal6.png';
import gal7 from '../src/images/gal7.png';
import gal8 from '../src/images/gal8.png';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const GallarySection =()=>{
 

// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// if (btnContainer !== null) {
//     var btns = btnContainer.getElementsByClassName("btn1");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(){
//           var current = document.getElementsByClassName("active");
//           current[0].className = current[0].className.replace(" active", "");
//           this.className += " active";
//         });
//       }
// }

    return(
    <>
<section className="gallary-sec">
<div class="container-fluid">
<div className="row bg-transparent ">
                <div className="col-8 mx-auto top-gallary-text text-center">
                    <h3>FEATURED PRODUCTS</h3>
                    <img src={bar} alt="bar" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod <br/>
tempor incididunt ut labore et dolore magnam </p>
            
                </div>
            </div>
<div class="row">
    <div class="col-10 mx-auto text-center py-3">
            <button class="btn active btn-default filter-button" data-filter="all">All</button>
            <button class="btn btn-default filter-button" data-filter="hdpe">Design</button>
            <button class="btn btn-default filter-button" data-filter="sprinkle">Code</button>
            <button class="btn btn-default filter-button" data-filter="spray">Photography</button>
            <button class="btn btn-default filter-button" data-filter="irrigation">Apps</button>
        </div>
        <br/>
</div>

        <div class="row pb-5">
    
            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div className="content">
                <img src={gal4} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
</div>
            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
            <div className="content">
                <img src={gal3} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div className="content">
                <img src={gal2} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div className="content">
                <img src={gal1} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div className="content">
                <img src={gal4} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div className="content">
                <img src={gal6} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div className="content">
                <img src={gal7} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div className="content">
                <img src={gal8} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div className="content">
                <img src={gal3} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div className="content">
                <img src={gal1} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div className="content">
                <img src={gal1} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
            <div className="content">
                <img src={gal5} class="img-responsive"/>
                <a href="#"  title="User Profile">
      <div class="overlay">
 
  <span>
  <AddIcon className="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>
        </div>
    </div>
</section>
    </>
    )
}
export default GallarySection;