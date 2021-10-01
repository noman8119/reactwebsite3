import React from "react";
import Header from './Header'
import Navbar from './Navbar';
import CardSection from './CardSection';

import Footer from './Footer';
import AboutSection from './AboutSection';
import PortfolioSection from "../PortfolioSection";
import GallarySection from "../GallarySection";
import SliderSection from "../SliderSection";
import Roundslider from "../Roundslider";
const App = () => {
    return (<> <Navbar/> < Header /><AboutSection/> < CardSection /><Roundslider/><PortfolioSection/><GallarySection/><SliderSection/>  < Footer /> </>);
}
export default App;