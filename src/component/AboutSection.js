import React from "react";
const AboutSection = () => {
    return (
        <div class="container  " id="demo1 ">
            <div className="jumbotron  mb-0 text-center bg-dark text-light">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                        responsive, mobile-first projects on the web.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="about-sec">
                        <h1 className="text-light">About Us</h1>
                        <p className="text-light">
                            There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words
                            which don't look even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            The generated Lorem Ipsum is therefore always free from repetition, injected
                            humour, or non-characteristic words etc.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="img-sec">
                        <img src="img/main1.png" width="100%" alt=""/>
                        <div className="overlay" data-toggle="modal" data-target="#myModal">
                            <img src="img/btn.png" width="100%" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div class="modal modal p-0  bg-transparent" id="myModal">
                <div class="modal-dialog modal-lg bg-transparent modal-dialog-centered">
                    <div class="modal-content">
                        <button type="button" class="close bg-transparent" data-dismiss="modal">&times;</button>
                        <div class="modal-body close bg-transparent p-0">
                            <div class="container1">
                                <iframe
                                    class="responsive-iframe"
                                    width="1110"
                                    height="465"
                                    src="https://www.youtube.com/embed/_iPQyIaHsiA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal end */}
        </div>
    );
}
export default AboutSection;