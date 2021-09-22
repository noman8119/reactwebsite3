import React from "react";
import Header from './Header'
import Navbar from './Navbar';
import CardSection from './CardSection';
import PriceSection from './PriceSection';
import Footer from './Footer';
import AboutSection from './AboutSection';
const App = () => {
    return (<> <Navbar/> < Header /> <AboutSection/> < CardSection /> <PriceSection/> < Footer /> </>);
}
export default App;