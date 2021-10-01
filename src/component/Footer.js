import React from "react";
const Footer = () => {
let date =new Date();
let year=date.getFullYear();


    return (<>
        <section className="footer-sec">
        <div className="container">
            <div className="row py-5">
                <div className="col-md-4 col-12">
                    <div className="footer-text footer1 ">
                      <h3>LOGO</h3>
                    <ul> 
                    <li>Info@bzbeetech.com</li>
                    <li>+92 300 123 4567</li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className=" footer-text footer2">
                    <h3>Social Media</h3>
                    <ul> 
                    <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    <li>  <i class="fa fa-google-plus" aria-hidden="true"></i> </li>
                    <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                    </ul>    <p className=" text-dark ">
                        
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className=" footer-text footer3">
                    <h3>Address</h3>
                    <ul> 
                    <li>35/4, Lake Circle, Los</li>
                    <li>angles-1205, USA</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section>
<div className="bottom-footer text-center p-">
    <p className="p-0 m-0">© {year} BusyBeeTech. All Rights Reserved.</p>
</div>
        </section>  
        </>
    )
}
export default Footer;